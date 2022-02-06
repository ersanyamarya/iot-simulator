import { DataType, FakeDataConfigSchema, parser } from '../src';

let testData: FakeDataConfigSchema;

beforeAll(() => {
  process.env.NODE_ENV = 'test';
  testData = {
    temperature: {
      type: DataType.INTEGER,
      min: -100,
      max: 100,
      variance: 10,
    },
    windSpeeds: {
      type: DataType.ARRAY,
      arrayOf: DataType.FLOAT,
      arrayLength: 10,
      min: 0,
      max: 100,
      variance: 10,
    },
    windDirection: {
      type: DataType.STRING,
      stringLength: 10,
    },
  };
});

describe('parser', () => {
  it('parses the config', () => {
    const result = parser(testData);
    console.log(result);

    expect(result).toEqual({
      temperature: expect.any(Number),
      windSpeeds: expect.any(Array),
      windDirection: expect.any(String),
    });

    expect(result.windSpeeds).toHaveLength(10);
  });
});
