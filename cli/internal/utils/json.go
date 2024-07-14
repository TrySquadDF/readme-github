package utils

import (
	"encoding/json"
	"fmt"
	"github.com/pterm/pterm"
	"os"
	"path/filepath"
)

func CreateJsonFile(opts *CreateFileOpts) error {
	pterm.Info.Println(fmt.Sprintf("Creating file %s.json in %s", opts.Name, opts.Path))
	f, err := os.Create(filepath.Join(opts.Path, fmt.Sprintf("%s.json", opts.Name)))
	if err != nil {
		return err
	}

	defer func(f *os.File) {
		err := f.Close()
		if err != nil {
			pterm.Fatal.Println(err)
		}
	}(f)

	encoder := json.NewEncoder(f)

	encoder.SetEscapeHTML(false)
	encoder.SetIndent("", "")

	err = encoder.Encode(opts.Data)
	if err != nil {
		return err
	}

	return nil
}

func ReadJson[D interface{}](absolutePath string, defaultState *D) *D {
	pointer, err := os.ReadFile(absolutePath)

	if err != nil {
		pterm.Fatal.Println(err)
	}

	err = json.Unmarshal(pointer, &defaultState)

	return defaultState
}
