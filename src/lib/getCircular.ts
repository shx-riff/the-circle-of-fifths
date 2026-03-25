export const getCircular = <T>(arr: T[] | readonly T[], index: number): T => {
  const safeIndex = index % arr.length;
  return arr[(safeIndex + arr.length) % arr.length];
};
