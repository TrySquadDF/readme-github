import express from "express";
import card from "./api/languagesUsed";
import * as dotenv from "dotenv";

const factory = express();
const port = process.env.PORT || 3000;

dotenv.config();

interface EnvVariables {
  TEST_TOKEN: string;
}

export const env: EnvVariables = {
  TEST_TOKEN: process.env.TEST_TOKEN as string,
};

factory.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
factory.get("/", card);
