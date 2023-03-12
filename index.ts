import express from "express";
import card from "./api/languagesUsed";
import * as dotenv from "dotenv";

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
factory.get("/", card);
