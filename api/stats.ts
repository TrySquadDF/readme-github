import { Request, Response } from "express";
import { getstats } from "../src/featchers";
import { env } from "../index";
import {
  calculatePercentages,
  filteringByDate,
  getLanguageStatistics,
  groupLanguages,
  sortBySize,
  sortLanguagesAscending,
} from "../src/utility";
import type { statsFormat } from "../src/utility";
import { PieChart } from "../src/graphic";

export type LanguageInfo = { value: number; color: string; name: string };

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

  console.log(currentStatistics);

  const difference = comparison(statisticsForThePastMonths, currentStatistics);
  const size = getAllSize(currentStatistics);

  const groupedLanguageInfo = groupLanguages(currentStatistics, 2);
  const stats = calculatePercentages(groupedLanguageInfo);
  const percentage = ((difference / size) * 100).toFixed(2);

  const LanguageInfo: LanguageInfo[] = [];

  for (const key in stats) {
    LanguageInfo.push({
      value: stats[key],
      color: groupedLanguageInfo[key].color,
      name: groupedLanguageInfo[key].name,
    });
  }

  LanguageInfo.sort((a, b) => a.value - b.value);

  const Chart = new PieChart(200, 200, 20, 10);
  Chart.draw(LanguageInfo, { lines: size, change: percentage });

  res.set("Content-Type", "image/png");

  return res.send(Chart.saveToFile());
};
