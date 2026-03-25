import { test, expect } from "vitest";

import { normalizeAngle } from "./normalizeAngle";

test("normalizes angle by removing negative values and truncating", () => {
  expect(normalizeAngle(0)).toBe(0);
  expect(normalizeAngle(10)).toBe(10);
  expect(normalizeAngle(180)).toBe(180);
  expect(normalizeAngle(360)).toBe(0);
  expect(normalizeAngle(380)).toBe(20);

  expect(normalizeAngle(-10)).toBe(350);
  expect(normalizeAngle(-180)).toBe(180);
  expect(normalizeAngle(-360)).toBe(-0);
  expect(normalizeAngle(-380)).toBe(340);
});
