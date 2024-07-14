// ?? Что это делает ?? WARNING: Не используется
export const getPastDateByMonths = (months: number): string => {
  const date = new Date();
  date.setMonth(date.getMonth() - months, 1);
  return date.toISOString();
};
