import { edge, node } from "../featchers";

type statsFormat = {
  [key: string]: {
    color: string;
    name: string;
    size: number;
  };
};
function getLanguageStatistics(nodes: node[]): statsFormat {
  return nodes
    .reduce((acc: edge[], curr) => {
      if (curr.languages.edges.length > 0) {
        return curr.languages.edges.concat(acc);
      }
      return acc;
    }, [])
    .reduce((acc: { [key: string]: any }, prev) => {
      let langSize = prev.size;
      if (acc[prev.node.name] && prev.node.name === acc[prev.node.name].name) {
        langSize = prev.size + acc[prev.node.name].size;
      }
      return {
        ...acc,
        [prev.node.name]: {
          name: prev.node.name,
          color: prev.node.color,
          size: langSize,
        },
      };
    }, {});
}

function filteringByDate(nodes: node[], date = new Date().toISOString()) {
  return nodes.filter((el) => new Date(date) > new Date(el.createdAt));
}

function sortBySize(nodes: { [name: string]: any }) {
  return Object.keys(nodes)
    .sort((a, b) => nodes[b].size - nodes[a].size)
    .reduce((resultValue: { [key: string]: string }, key) => {
      resultValue[key] = nodes[key];
      return resultValue;
    }, {});
}

export type { statsFormat };
export { getLanguageStatistics, filteringByDate, sortBySize };
