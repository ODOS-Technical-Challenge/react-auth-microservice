process.env.TZ = "UTC";

// eslint-disable-next-line no-undef
module.exports = {
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.test.json",
    },
  },
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.(ts|js)x?$": "ts-jest",
  },
  moduleNameMapper: {
    "\\.(css|scss|png|svg)$": "<rootDir>/mock/styleMock.js",
  },
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  collectCoverage: true,
  coverageDirectory: "coverage",
  collectCoverageFrom: [
    "**/*.{ts,tsx}",
    "!**/node_modules/**",
    "!**/vendor/**",
  ],
  coverageReporters: ["lcov", "text"],
};
