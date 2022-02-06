import { DataType, FakeDataConfigSchema, FakeDataItemSchema } from '.';
import {
  generateRandomIntegerBetween,
  generateRandomStringOfLength,
  generateRandomFloatBetween,
  generateArrayOfRandomIntegersBetween,
  generateArrayOfRandomStringsOfLength,
  generateArrayOfRandomFloatBetween,
} from './utils';

export function parser(
  schema: FakeDataConfigSchema
): Record<string, number | string | number[] | string[]> {
  const keys = Object.keys(schema);
  return keys.reduce((acc, key) => {
    return {
      ...acc,
      [key]: generateData(schema[key]),
    };
  }, {});
}

export function generateData(item: FakeDataItemSchema) {
  switch (item.type) {
    case DataType.STRING:
      return generateRandomStringOfLength(item.stringLength || 10);
    case DataType.INTEGER:
      return generateRandomIntegerBetween(item.min || 0, item.max || 100);
    case DataType.FLOAT:
      return generateRandomFloatBetween(item.min || 0, item.max || 100);
    case DataType.ARRAY:
      return generateDataArray(item);
    default:
      return 'apple';
  }
}
function generateDataArray(item: FakeDataItemSchema) {
  switch (item.arrayOf) {
    case DataType.INTEGER:
      return generateArrayOfRandomIntegersBetween(
        item.min || 0,
        item.max || 100,
        item.arrayLength || 10
      );
    case DataType.FLOAT:
      return generateArrayOfRandomFloatBetween(
        item.min || 0,
        item.max || 100,
        item.arrayLength || 10
      );
    case DataType.STRING:
      return generateArrayOfRandomStringsOfLength(
        item.arrayLength || 10,
        item.stringLength || 10
      );
    default:
      return [];
  }
}
