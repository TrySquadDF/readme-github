import { Response, Request } from "express";
import { getLanguageStatistics, sortBySize } from "../src/utility";
import { getstats } from "../src/featchers";
import { card } from "../src/builders";
import { env } from "..";

export default async (req: Request, res: Response) => {
  const { username } = req.query;

  if (typeof username !== "string" || Boolean(username) === false) {
    throw new Error("invalid username");
  }

  const { data } = await getstats({ login: username }, env.GITHUB_TOKEN);

  if (!data.data || data.data.user.repositories.nodes.length === 0) {
    throw new Error(
      "the user has not been found or there is not enough data for analysis yet"
    );
  }

  const result = sortBySize(
    getLanguageStatistics(data.data.user.repositories.nodes)
  );

  if (Object.keys(result).length === 0) {
    throw new Error("alas but something went wrong");
  }

  res.setHeader("Content-Type", "image/svg+xml");

  res.setHeader(
    "Cache-Control",
    `max-age=${3600}, s-maxage=${3600}, stale-while-revalidate=${3600}`
  );

  return res.send(card(Object.keys(result)));
};
