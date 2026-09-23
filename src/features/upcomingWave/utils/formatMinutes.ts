// Human-friendly task length: '4 min', '2 h', '12 h' with a locale decimal separator.
export const formatMinutes = (minutes: number, decimalSeparator: string) => {
  const decimal = (value: number) => (Number.isInteger(value) ? String(value) : value.toFixed(1).replace('.', decimalSeparator));
  if (minutes < 60) return `${minutes < 10 ? decimal(minutes) : Math.round(minutes)} min`;
  const hours = minutes / 60;
  return `${hours < 10 ? decimal(Math.round(hours * 10) / 10) : Math.round(hours)} h`;
};
