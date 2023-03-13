import { Response, Request } from "express";
import { getstats, edge } from "../src/featchers";
import { env } from "..";
import { card, warning } from "../src/builders";

export default async (req: Request, res: Response) => {
  res.setHeader("Content-Type", "image/svg+xml");

  try {
    const username = req.query.username ? req.query.username : "TrySquadDF";
    if (typeof username !== "string") {
      throw new Error();
    }

    const { data } = await getstats({ login: username }, env.GITHUB_TOKEN); // heyqbnk --- test-case user

    res.setHeader(
      "Cache-Control",
      `max-age=${86400}, s-maxage=${86400}, stale-while-revalidate=${86400}`
    );

    let repoNodes = data.data.user.repositories.nodes;

    const result = repoNodes
      .reduce((acc: edge[], curr) => {
        if (curr.languages.edges.length > 0) {
          return curr.languages.edges.concat(acc);
        }
        return acc;
      }, [])
      .reduce((acc: { [key: string]: any }, prev) => {
        let langSize = prev.size;
        if (
          acc[prev.node.name] &&
          prev.node.name === acc[prev.node.name].name
        ) {
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

    const languageStatistics: { [key: string]: any } = Object.keys(result)
      .sort((a, b) => result[b].size - result[a].size)
      .reduce((resultValue: { [key: string]: string }, key) => {
        resultValue[key] = result[key];
        return resultValue;
      }, {});

    console.log(languageStatistics);

    return res.send(card(Object.keys(languageStatistics)));
  } catch (e) {
    res.setHeader("Cache-Control", `no-cache, no-store, must-revalidate`);
    return res.send(warning);
  }
};
