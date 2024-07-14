package svg

import (
	"errors"
	"github.com/urfave/cli/v2"
	"os"
	"trysquad/main/internal/config"
	"trysquad/main/internal/utils"
)

func svgCollector[T comparable](directory string, preprocess func(data []byte) T) (map[string]T, error) {
	list, err := utils.FindByExtension(directory, ".svg")
	if err != nil {
		return nil, err
	}

	components := map[string]T{}

	for _, file := range list {
		data, err := os.ReadFile(file.Path)
		if err != nil {
			continue
		}

		components[file.Name] = preprocess(data)
	}

	return components, nil
}

var Cmd = &cli.Command{
	Name:  "merge-svg",
	Usage: "",
	Flags: Flags,
	Action: func(ctx *cli.Context) error {
		isStatic := ctx.Bool("parse")
		fileName := ctx.String("filename")
		pathToFiles := ctx.String("path")

		if pathToFiles == "" {
			return errors.New("need to specify the path to the collection of svg files")
		}

		cfg, err := config.ReadFromContext(ctx)
		if err != nil {
			return err
		}

		var preprocess func(data []byte) interface{}

		if !isStatic {
			preprocess = func(data []byte) interface{} {
				return utils.BytesToString(data)
			}
		} else {
			preprocess = func(data []byte) interface{} {
				return utils.ParseXmlFromBytesString(data)
			}
		}

		components, err := svgCollector(pathToFiles, preprocess)
		if err != nil {
			return err
		}

		if len(components) == 0 {
			return nil
		}

		if err := utils.CreateJsonFile(&utils.CreateFileOpts{
			File: utils.File{
				Name: fileName,
				Path: cfg.Output.Location,
			},
			Data: components,
		}); err != nil {
			return err
		}

		return nil
	},
}
