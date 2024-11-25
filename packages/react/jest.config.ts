module.exports = {
  collectCoverageFrom: [
    "**/*.(ts|tsx)"
  ],
  transformIgnorePatterns: [
    "node_modules"
  ],
  coveragePathIgnorePatterns: [
    "node_modules",
    "test-config",
    "interfaces",
    "jestGlobalMocks.ts",
    ".mock.ts",
    ".dto.ts",
    ".d.ts",
    "src/index.ts",
    "setupTests.ts",
    "coverage/*",
    "src/config/*",
    "style.ts"
  ],
  setupFilesAfterEnv: [
    './src/tests/setupTests.ts'
  ],
}
