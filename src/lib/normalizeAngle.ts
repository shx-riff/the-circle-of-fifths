export const normalizeAngle = (angle: number) => {
  const deg = angle % 360;
  return deg >= 0 ? deg : 360 + deg;
};
