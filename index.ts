import * as dotenv from "dotenv";
import { Factory } from "./src/utility/wrapper";
import card from "./api/language";
import stats from "./api/stats";

dotenv.config();

interface EnvVariables {
  GITHUB_TOKEN: string;
}

export const env: EnvVariables = {
  GITHUB_TOKEN: process.env.GITHUB_TOKEN as string,
};

const server = new Factory(process.env.PORT || 3000);
server.asyncEndpoint("/language", card);
server.asyncEndpoint("/st", stats);

server.registerErrorHandler();
