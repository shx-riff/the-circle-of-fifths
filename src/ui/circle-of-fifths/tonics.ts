export const TONICS = [
  "C",
  "G",
  "D",
  "A",
  "E",
  "B",
  "GFlat",
  "DFlat",
  "AFlat",
  "EFlat",
  "BFlat",
  "F",
] as const;

export type Tonic = (typeof TONICS)[number];

export const TONIC_ANGLES: Record<Tonic, number> = {
  G: 330,
  D: 300,
  A: 270,
  E: 240,
  B: 210,
  GFlat: 180,
  DFlat: 150,
  AFlat: 120,
  EFlat: 90,
  BFlat: 60,
  F: 30,
  C: 0,
};
