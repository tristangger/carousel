/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    "^.+\\.svg$": "jest-svg-transformer",
    "globals": {
      "window": {}
    }
  },
};
