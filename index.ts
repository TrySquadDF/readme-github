import express from "express";
import card from "./api/language";
import * as dotenv from "dotenv";
// import { getstats } from "./src/featchers";
// { Request, Response } from "express";

const factory = express();
const port = process.env.PORT || 3000;

dotenv.config();

interface EnvVariables {
  GITHUB_TOKEN: string;
}

export const env: EnvVariables = {
  GITHUB_TOKEN: process.env.GITHUB_TOKEN as string,
};

factory.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
factory.get("/language", card);
// factory.get("/user", async (req: Request, res: Response) => {
//   try {
//     const username = req.query.username ? req.query.username : "TrySquadDF";
//     if (typeof username !== "string") {
//       throw new Error();
//     }

//     const { data } = await getstats({ login: username }, env.GITHUB_TOKEN);
//     return res.send(data);
//   } catch (e) {
//     res.send(null);
//   }
// });
