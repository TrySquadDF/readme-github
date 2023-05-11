import { Request, Response } from "express";
import { getstats } from "../src/featchers";
import { env } from "../index";
import {
  filteringByDate,
  getLanguageStatistics,
  sortBySize,
} from "../src/utility";
import type { statsFormat } from "../src/utility";

function comparison(first: statsFormat, sec: statsFormat) {
  let result = 0;

  for (let key in sec) {
    if (first[key] && sec[key]) {
      result += sec[key].size - first[key].size;
    }
  }

  return result;
}

function getAllSize(node: statsFormat) {
  let size = 0;
  for (let key in node) {
    size += node[key].size;
  }

  return size;
}

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

  const currentDate = new Date();
  currentDate.setDate(1);
  currentDate.setMonth(currentDate.getMonth() - 3);

  const statisticsForThePastMonths = getLanguageStatistics(
    filteringByDate(
      data.data.user.repositories.nodes,
      currentDate.toISOString()
    )
  );

  const currentStatistics = getLanguageStatistics(
    data.data.user.repositories.nodes
  );

  const difference = comparison(statisticsForThePastMonths, currentStatistics);
  const size = getAllSize(currentStatistics);

  const percentage = ((difference / size) * 100).toFixed(2);

  console.log(percentage);

  return res.send("ok");
};
