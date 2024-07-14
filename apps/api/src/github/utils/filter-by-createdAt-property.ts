interface HasCreationDateInterface {
  createdAt: string;
}

/**
 * @param target - The array of objects to filter. Each object should have a `createdAt` property.
 */
export function filterByCreatedAtProperty<T extends HasCreationDateInterface>(target: T[], date = new Date().toISOString()) {
  const comparisonDate = new Date(date);
  return target.filter((node) => comparisonDate > new Date(node.createdAt));
}
