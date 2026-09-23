// '2025-04' → 2025.25, for plotting monthly dates on a continuous axis.
export const toYear = (date: string) => {
  const [year, month] = date.split('-').map(Number);
  return year + (month - 1) / 12;
};
