package utils

import (
	"encoding/json"
	"encoding/xml"
	"fmt"
	"io"
	"strings"
)

type Node struct {
	Name       string            `json:"name"`
	Attributes map[string]string `json:"attributes"`
	Content    string            `json:"content"`
	Children   []*Node           `json:"children"`
	/**
	 * Parent we do not specify it when marshaling to avoid cyclic dependencies
	 */
	Parent *Node `json:"-"`
}

func NewNode(name string, parent *Node) *Node {
	return &Node{
		Name:       name,
		Attributes: make(map[string]string),
		Children:   make([]*Node, 0),
		Parent:     parent,
	}
}

func (n *Node) AddChild(child *Node) {
	n.Children = append(n.Children, child)
}

func (n *Node) SetAttribute(name, value string) {
	n.Attributes[name] = value
}

func (n *Node) SetContent(content string) {
	n.Content = content
}

func (n *Node) ToJSON() string {
	data, err := json.MarshalIndent(n, "", "  ")
	if err != nil {
		return err.Error()
	}
	return string(data)
}

func ParseXML(data string) *Node {

	decoder := xml.NewDecoder(strings.NewReader(data))

	var current *Node
	var root *Node

	for {
		t, err := decoder.Token()
		if err != nil {
			if err == io.EOF {
				break
			}
			fmt.Printf("error: %v", err)
			return nil
		}

		switch token := t.(type) {
		case xml.StartElement:
			node := NewNode(token.Name.Local, current)
			for _, attr := range token.Attr {
				node.SetAttribute(attr.Name.Local, attr.Value)
			}
			if current != nil {
				current.AddChild(node)
			}
			if root == nil {
				root = node // set root node
			}
			current = node // descend
		case xml.EndElement:
			if current != nil {
				current = current.Parent // ascend
			}
		case xml.CharData:
			if current != nil {
				content := strings.TrimSpace(string(token))
				if content != "" {
					current.SetContent(content)
				}
			}
		}
	}

	return root
}
