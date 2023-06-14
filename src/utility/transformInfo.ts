import { edge, node } from "../featchers";

type Language = {
  color: string;
  name: string;
  size: number;
};

type statsFormat = Record<string, Language>;
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

function sortLanguagesAscending(languages: statsFormat): statsFormat {
  const sortedLanguages: statsFormat = {};
  const sortedKeys = Object.keys(languages).sort(
    (a, b) => languages[a].size - languages[b].size
  );

  for (const key of sortedKeys) {
    sortedLanguages[key] = languages[key];
  }

  return sortedLanguages;
}

function sortBySize(nodes: { [name: string]: any }) {
  return Object.keys(nodes)
    .sort((a, b) => nodes[b].size - nodes[a].size)
    .reduce((resultValue: { [key: string]: string }, key) => {
      resultValue[key] = nodes[key];
      return resultValue;
    }, {});
}

function removePropertiesFromEnd<T extends Record<string, any>>(
  obj: T,
  count: number
): { object: T; removedItem: Partial<T> } {
  const keys = Object.keys(obj);
  const removedKeys = keys.slice(-count);
  const removedItem: Partial<T> = {};

  for (const key of removedKeys) {
    removedItem[key as keyof T] = obj[key as keyof T];
    delete obj[key as keyof T];
  }

  return { object: obj, removedItem };
}

function groupLanguages(languages: statsFormat, limit: number): statsFormat {
  const sorted = sortLanguagesAscending(languages);

  const { object, removedItem } = removePropertiesFromEnd(sorted, limit);

  let otherSize = 0;

  for (const key in object) {
    otherSize += object[key].size;
  }

  const otherLanguage: Language = {
    name: "Other",
    color: "#D9D9D9",
    size: otherSize,
  };

  return {
    ...removedItem,
    Other: otherLanguage,
  };
}

export type { statsFormat };
export {
  getLanguageStatistics,
  filteringByDate,
  sortBySize,
  sortLanguagesAscending,
  groupLanguages,
};
