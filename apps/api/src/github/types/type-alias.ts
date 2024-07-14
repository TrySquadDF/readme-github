import type { UserRepositoriesQuery } from '@github/generated-types';

import { ExtractProperty, PickFromArray } from '@shared/types/logic'


type UserRepositories = ExtractProperty<NonNullable<UserRepositoriesQuery['user']>, 'repositories'>
type UserRepositoriesNodes = NonNullable<UserRepositories['nodes']>
type UserRepositoriesNode = NonNullable<PickFromArray<UserRepositoriesNodes>>

type LanguageNodeEdge = NonNullable<PickFromArray<NonNullable<NonNullable<UserRepositoriesNode['languages']>['edges']>>>


export type { UserRepositoriesNodes, LanguageNodeEdge };