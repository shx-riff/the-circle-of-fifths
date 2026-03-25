export const getSmallestAngleDelta = (
  currentAngle: number,
  targetAngle: number,
) => {
  const delta = targetAngle - currentAngle;
  if (delta > 180) {
    return delta - 360;
  }
  if (delta < -180) {
    return delta + 360;
  }
  return delta;
};
