export function generateRandomIntegerBetween(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generateRandomFloatBetween(min: number, max: number): number {
  return Number((Math.random() * (max - min) + min).toFixed(2));
}

export function generateArrayOfRandomIntegersBetween(
  min: number,
  max: number,
  length: number
): number[] {
  return Array.from({ length }, () => generateRandomIntegerBetween(min, max));
}

export function generateArrayOfRandomFloatBetween(
  min: number,
  max: number,
  length: number
): number[] {
  return Array.from({ length }, () => generateRandomFloatBetween(min, max));
}
