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
