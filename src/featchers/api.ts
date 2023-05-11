import axios, { AxiosHeaders } from "axios";

type languageNode = { color: string; name: string };
type edge = { size: number; node: languageNode };
type node = { name: string; createdAt: string; languages: { edges: edge[] } };
type repositories = { nodes: node[] };
type user = { repositories: repositories };
type response = { data: { user: user } };

const request = (data: { [key: string]: any }, headers: AxiosHeaders) => {
  return axios<response>({
    url: "https://api.github.com/graphql",
    method: "post",
    headers,
    data,
  });
};

export { request, languageNode, edge, node, repositories, user, response };
