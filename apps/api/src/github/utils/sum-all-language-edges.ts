import type { LanguageNodeEdge } from '../types/type-alias';

export function sumAllLanguageEdges(nodes: LanguageNodeEdge[]): number {
  return nodes.reduce((sum, { size }) => sum + size, 0);
}
