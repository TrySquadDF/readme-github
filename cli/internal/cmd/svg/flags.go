package svg

import "github.com/urfave/cli/v2"

var Flags = []cli.Flag{
	&cli.StringFlag{
		Name:    "path",
		Aliases: []string{"p"},
	},
	&cli.StringFlag{
		Name:     "filename",
		Aliases:  []string{"n"},
		Required: true,
	},
	&cli.BoolFlag{
		Name: "parse",
	},
}
