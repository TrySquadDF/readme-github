import { Injectable, Logger } from '@nestjs/common';
import { ApolloClient, type NormalizedCacheObject } from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';

import { GET_USER_REPOSITORIES } from './queries/user-repositories';
import { hideOverflowLanguagesBySize, groupeByNameLanguage } from './utils';

import type { UserRepositoriesQuery, UserRepositoriesQueryVariables } from './generated-types';
import { ConfigService } from '@nestjs/config';

export type RepositoriesOptionsType = Omit<UserRepositoriesQueryVariables, 'login'>

@Injectable()
export class GithubService extends Logger {
  private readonly client: ApolloClient<NormalizedCacheObject>;

  constructor(private configService: ConfigService) {
    super(GithubService.name);

    this.client = new ApolloClient({
      link: ApolloLink.from([
        onError(({ graphQLErrors, networkError }) => {
          if (graphQLErrors) {
            graphQLErrors.forEach(({ message, locations, path }) =>
              this.error(`Message: ${message}, Location: ${JSON.stringify(locations)}, Path: ${JSON.stringify(path)}`),
            );
          }
          if (networkError) this.error(`${JSON.stringify(networkError)}`);
        }),
        new HttpLink({
          uri: this.configService.get('GH_GRAPHQL_API_URL'),
          headers: {
            Authorization: `bearer ${this.configService.get('GH_PERSONAL_ACCESS_TOKEN')}`,
          },
        }),
      ]),
      cache: new InMemoryCache(),
    });
  }

  getClient(): ApolloClient<NormalizedCacheObject> {
    return this.client;
  }

  getUserRepositories(login: string, options: RepositoriesOptionsType = {
}) {
    return this.client.query<UserRepositoriesQuery, UserRepositoriesQueryVariables>({
      query: GET_USER_REPOSITORIES,
      variables: {login, ...options},
    });
  }

  hideOverflowLanguagesBySize = hideOverflowLanguagesBySize;
  groupeByNameLanguage = groupeByNameLanguage;
}
