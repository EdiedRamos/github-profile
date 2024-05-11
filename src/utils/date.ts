const MS_CONVERSION = {
  DAY: 24 * 60 * 60 * 1000,
};

export function elapsedTimeMessage(date: string): string {
  const updatedTime = new Date(date).getTime();
  const currentTime = Date.now();
  const elapsedTimeInDays = Math.floor(
    (currentTime - updatedTime) / MS_CONVERSION.DAY
  );

  if (elapsedTimeInDays === 1) return "Updated today";
  if (elapsedTimeInDays > 1) return `Updated ${elapsedTimeInDays} days ago`;
  return "Updated today";
}
