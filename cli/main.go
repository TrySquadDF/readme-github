package main

import (
	"log"
	"os"
	"trysquad/main/internal/cmd/svg"
	"trysquad/main/internal/config"

	"github.com/urfave/cli/v2"
)

func main() {
	app := &cli.App{
		Name:        "go run cmd/main.go",
		Description: "cli for helping in manage project",
		Flags: []cli.Flag{
			&cli.StringFlag{
				Name:        "config",
				Aliases:     []string{"c"},
				Required:    false,
				Value:       "./cli-config.json",
				DefaultText: "./cli-config.json",
			},
		},
		Commands: []*cli.Command{
			svg.Cmd,
		},
		Before: func(ctx *cli.Context) error {
			pathToConfig := ctx.String("config")
			cfg, err := config.New(pathToConfig)

			if err != nil {
				return err
			}

			ctx.App.Metadata["config"] = cfg
			return nil
		},
	}

	if err := app.Run(os.Args); err != nil {
		log.Fatal(err)
	}
}
