package config

import (
	"errors"
	"os"
	"path/filepath"
	"time"
	"trysquad/main/internal/utils"

	"github.com/urfave/cli/v2"
)

type PointerToLocation struct {
	Location string `json:"location"`
}

type MetaData struct {
	CreatedAt  time.Time `json:"created-at"`
	LoadedFrom string    `json:"loaded-from"`
}

type CliConfigurations struct {
	Output   PointerToLocation `json:"output"`
	metadata MetaData          `json:"-"`
}

func New(path string) (*CliConfigurations, error) {
	if path == "" {
		return nil, errors.New(`the specified path of the configuration file is empty`)
	}

	wd, err := os.Getwd()
	if err != nil {
		return nil, err
	}

	configLocation := filepath.Join(wd, path)

	config := utils.ReadJson(configLocation, &CliConfigurations{
		Output: PointerToLocation{
			Location: "",
		},
		metadata: MetaData{
			CreatedAt:  time.Now(),
			LoadedFrom: configLocation,
		},
	})

	return config, nil
}

func ReadFromContext(ctx *cli.Context) (*CliConfigurations, error) {
	config, ok := ctx.App.Metadata["config"].(*CliConfigurations)
	if !ok {
		return nil, errors.New("config not found in context")
	}

	return config, nil
}

func (c *CliConfigurations) MetaInfo() MetaData {
	return c.metadata
}
