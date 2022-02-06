export interface FakerConfigOptions {
  path: string;
}

export interface FakeDataItemSchema {
  type: DataType;
  stringLength?: number;
  min?: number;
  max?: number;
  variance?: number;
  truthyProbability?: number;
  arrayLength?: number;
  arrayOf?: DataType;
  nested?: FakeDataConfigSchema;
  meta?: {
    [key: string]: any;
  };
}

export interface FakeDataConfigSchema {
  [key: string]: FakeDataItemSchema;
}

export enum DataType {
  STRING = 'string',
  INTEGER = 'integer',
  FLOAT = 'float',
  BOOLEAN = 'boolean',
  ARRAY = 'array',
  OBJECT = 'object',
}
