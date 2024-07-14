import { sortLanguagesBySize } from './sort-languages-by-size';
import { sumAllLanguageEdges } from './sum-all-language-edges';
import { LanguageNodeEdge } from '../types/type-alias';

interface OverflowConfigurations {
  overflowBoundary: number;
  excessLanguagesStyle?: LanguageNodeEdge['node'];
}

export function hideOverflowLanguagesBySize(languages: LanguageNodeEdge[], config?: OverflowConfigurations): LanguageNodeEdge[] {
  const { overflowBoundary = 0, excessLanguagesStyle } = config ?? {};
  const { name = 'hidden', color = `#3d3d3d`} = excessLanguagesStyle ?? {};

  const sorted = sortLanguagesBySize(languages);

  /* Calculates how match is needed to hide from the end of the array.
  If the overflowBoundary is greater than the number of sorted groups */
  const hideIt = overflowBoundary > sorted.length || overflowBoundary === 0 ? 0 : sorted.length - overflowBoundary + 1;

  if (hideIt > 0) {
    const limited = sorted.splice(-1 * hideIt);
    const totalSizeOfLanguagesAbroad = sumAllLanguageEdges(limited);
    sorted.push({ node: { name, color, __typename: 'Language' }, size: totalSizeOfLanguagesAbroad, __typename: 'LanguageEdge' });
  }

  return sorted;
}
