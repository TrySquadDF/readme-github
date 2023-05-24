import { statsFormat } from "./transformInfo";

export function useAnalyze<T extends Record<string, Record<string, any>>>(
  object: T,
  analysisKey: PropertyKey
) {
  let size = 0;
  for (let i in object) {
    const target: Record<PropertyKey, any> = new Object(object[i]);
    if (
      target.hasOwnProperty(analysisKey) ||
      typeof target[analysisKey] === "number"
    ) {
      size += target[analysisKey];
    }
  }

  const result: { [key: string]: any }[] = [];

  for (let i in object) {
    const target: Record<PropertyKey, any> = new Object(object[i]);
    if (
      target.hasOwnProperty(analysisKey) ||
      typeof target[analysisKey] === "number"
    ) {
      const k = (target[analysisKey] / size).toFixed(4);
      if (parseInt(k) >= 1) {
        target.kooficent = 1;
        return {
          size: size,
          items: [target],
        };
      }
      target.kooficent = parseFloat(k);

      result.push(target);
    }
  }

  return {
    size: size,
    items: result,
  };
}

export function calculatePercentages(
  languages: statsFormat
): Record<string, number> {
  let totalSize = 0;
  for (const language of Object.values(languages)) {
    totalSize += language.size;
  }

  const percentages: Record<string, number> = {};
  for (const [key, language] of Object.entries(languages)) {
    const percent = (language.size / totalSize) * 100;
    percentages[key] = Math.round(percent * 100) / 100;
  }

  return percentages;
}
