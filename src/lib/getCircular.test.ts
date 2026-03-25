import { test, expect } from "vitest";

import { getCircular } from "./getCircular";

test("returns undefined for empty array", () => {
  expect(getCircular([], 1)).toBeUndefined();
});

test("returns element on start index", () => {
  expect(getCircular([1, 2, 3], 0)).toBe(1);
  expect(getCircular([1, 2, 3], 1)).toBe(2);
  expect(getCircular([1, 2, 3], 2)).toBe(3);
});

test("returns element on circulated start index when start overflows", () => {
  expect(getCircular([1, 2, 3], 3)).toBe(1);
  expect(getCircular([1, 2, 3], 4)).toBe(2);
  expect(getCircular([1, 2, 3], 5)).toBe(3);
  expect(getCircular([1, 2, 3], 6)).toBe(1);
});

test("handles negative index", () => {
  expect(getCircular([1, 2, 3], -1)).toBe(3);
  expect(getCircular([1, 2, 3], -2)).toBe(2);
  expect(getCircular([1, 2, 3], -3)).toBe(1);
  expect(getCircular([1, 2, 3], -4)).toBe(3);
});
