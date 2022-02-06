/**
 * Generate a random string of a given length
 * @param {number} length - The length of the string to be generated.
 * @returns A random string of length `length`
 */
export function generateRandomStringOfLength(length: number): string {
  const chars =
    'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890';
  const randomArray = Array.from(
    { length },
    (_v, _k) => chars[Math.floor(Math.random() * chars.length)]
  );

  const randomString = randomArray.join('');
  return randomString;
}

/**
 * Generate an array of random strings of a given length and number of strings

 * @param {number} length - The number of random strings to generate.
 * @param {number} stringLength - The length of the random string to generate.
 * @returns An array of strings.
 */
export function generateArrayOfRandomStringsOfLength(
  length: number,
  stringLength: number
): string[] {
  const randomArray = Array.from({ length }, () =>
    generateRandomStringOfLength(stringLength)
  );

  return randomArray;
}
