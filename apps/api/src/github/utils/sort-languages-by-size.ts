import type { LanguageNodeEdge } from '../types/type-alias'

export function sortLanguagesBySize(languages: LanguageNodeEdge[]): LanguageNodeEdge[] {
  // Resets the reference to prevent subsequent functions from mutating the original array
  return [...languages.sort((a, b) => b.size - a.size)];
}
