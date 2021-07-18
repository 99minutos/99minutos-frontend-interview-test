const {defaults} = require('jest-config');
import type {Config} from '@jest/types';
const config: Config.InitialOptions = {
  "preset": "ts-jest",
  "globals": {
    "ts-jest": {
      "tsconfig": "tsconfig.jest.json"
    }
  },
  verbose: true,
  "testEnvironment": "jsdom",
  moduleDirectories: ['node_modules', 'src'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  },
  "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
};
export default config;

