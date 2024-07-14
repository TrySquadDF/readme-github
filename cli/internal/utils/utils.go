package utils

import (
	"os"
	"path/filepath"
	"strings"
)

type File struct {
	Name string
	Path string
}

type CreateFileOpts struct {
	File
	Data interface{}
}

func FindByExtension(directory string, extension string) ([]File, error) {
	var files []File

	list, err := os.ReadDir(directory)
	if err != nil {
		return nil, err
	}

	for _, file := range list {
		if strings.HasSuffix(file.Name(), extension) {
			files = append(files, File{
				Name: strings.TrimSuffix(file.Name(), extension),
				Path: filepath.Join(directory, file.Name()),
			})
		}
	}

	return files, nil
}

func BytesToString(data []byte) string {
	return string(data)
}

func ParseXmlFromBytesString(data []byte) *Node {
	return ParseXML(BytesToString(data))
}
