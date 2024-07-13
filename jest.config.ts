import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  testEnvironment: "node",
  transform: {
    "^.+\\.tsx?$": "ts-jest", // Transform TypeScript files using ts-jest
  },
};

export default config;