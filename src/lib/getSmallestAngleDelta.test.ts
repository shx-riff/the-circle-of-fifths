import { test, expect } from "vitest";

import { getSmallestAngleDelta } from "./getSmallestAngleDelta";

test("returns absolute smallest delta", () => {
  expect(getSmallestAngleDelta(0, 60)).toBe(60);
  expect(getSmallestAngleDelta(30, 60)).toBe(30);
  expect(getSmallestAngleDelta(0, 180)).toBe(180);
  expect(getSmallestAngleDelta(0, 200)).toBe(-160);

  expect(getSmallestAngleDelta(60, 0)).toBe(-60);
  expect(getSmallestAngleDelta(60, 30)).toBe(-30);
  expect(getSmallestAngleDelta(180, 0)).toBe(-180);
  expect(getSmallestAngleDelta(200, 0)).toBe(160);

  expect(getSmallestAngleDelta(-10, -100)).toBe(-90);
  expect(getSmallestAngleDelta(-10, 100)).toBe(110);
  expect(getSmallestAngleDelta(10, -100)).toBe(-110);
  expect(getSmallestAngleDelta(100, -80)).toBe(-180);
});
