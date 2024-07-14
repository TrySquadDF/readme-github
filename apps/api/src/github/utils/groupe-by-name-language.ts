import type { UserRepositoriesNodes, LanguageNodeEdge } from '../types/type-alias';

export function groupeByNameLanguage(repositories: UserRepositoriesNodes | undefined | null): LanguageNodeEdge[] {
  if(repositories === undefined || repositories === null) return []

  const languageNodes: Record<string, LanguageNodeEdge> = {};

  repositories.forEach((repository) => {
    repository && repository.languages?.edges?.forEach((languageEdge) => {
      if(!languageEdge) return

      const {
        node: { name },
        size,
      } = languageEdge;
      
      if (languageNodes[name]) {
        languageNodes[name].size += size;
      } else {
        languageNodes[name] = languageEdge;
      }
    });
  });

  return Object.values(languageNodes);
}
