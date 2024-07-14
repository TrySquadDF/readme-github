import gql from 'graphql-tag';

export const GET_USER_REPOSITORIES = gql`
  query UserRepositories($login: String!, $first: Int = 25) {
    user(login: $login) {
      repositories(ownerAffiliations: OWNER, isFork: false, first: $first) {
        nodes {
          name
          createdAt
          languages(first: 10) {
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
`;
