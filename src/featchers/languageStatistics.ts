import axios from "axios";
import { request } from "./api";

type variablesType = { login: string };

const getstats = (variables: variablesType, token: string) => {
  return request(
    {
      query: `
    query userInfo($login: String!) {
      user(login: $login) {
        repositories(ownerAffiliations: OWNER, isFork: false, first: 100) {
          nodes {
            name
            createdAt
            languages(first: 10, orderBy: {field: SIZE, direction: DESC}) {
              edges {
                size
                node {
                  color
                  name
                }
              }
            }
          }
        }
      }
    }
    `,
      variables,
    },
    new axios.AxiosHeaders().setAuthorization(`token ${token}`)
  );
};

export { getstats };
