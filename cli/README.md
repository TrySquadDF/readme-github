# CLI Tool Usage Guide

This document provides a comprehensive guide on how to use the CLI tool developed for managing and processing SVG files within the project.

## Prerequisites

Before using the CLI tool, ensure that you have the following installed:

- **Go**: The CLI tool is developed in Go. Make sure you have Go installed on your system to run the tool.
- **Project Dependencies**: The project may have specific dependencies. Ensure all dependencies are installed by running `go mod tidy` in the project root.

## Usage
To use the CLI tool, you need to execute the built executable. Here are the available commands and options: 

### Merge SVG Files
To merge SVG files located in a specific directory into a single JSON file, use the merge-svg command with the following options:  
* `--filename, -n` : Specify the name of the output JSON file. This option is required.
* `--path, -p`: Specify the path to the directory containing SVG files.
* `--parse`: Parse the SVG files statically.

Example command:

```bash
 go run ./cli merge-svg --filename "output" --path "/path/to/svg/files" --parse
```

Ensure you specify the path to the SVG files and the filename for the output JSON file. The `--parse` option is optional and can be used if you want to parse the SVG files statically. 

### Configuration
The CLI tool supports a configuration file to set up project-specific settings. Use the `--config` or `-c` flag to specify the path to your configuration file when running the CLI tool.

```bash
 go run ./cli merge-svg --filename "output" --path "/path/to/svg/files" --config "/path/to/config/configFileName.json"
```

This CLI tool simplifies the management of SVG files in your project, streamlining the process of merging and processing SVG assets.


#### Basic Configuration File

This a base configuration file that can be used to set up the CLI tool. The configuration file should be in JSON format.

```json
{
  "output": {
    "location": "./directory/to/output/json/file"
  }
}
```