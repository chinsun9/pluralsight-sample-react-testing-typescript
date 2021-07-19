module.exports = {
    // The root of your source code, typically /src
    // `<rootDir>` is a token Jest substitutes
    roots: ['<rootDir>/src'],
  
    // Jest transformations -- this adds support for TypeScript
    // using ts-jest
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
    },
  
    // Runs special logic, adding special
    // extended assertions to Jest
    setupFilesAfterEnv: [
      '@testing-library/jest-dom/extend-expect'
    ],

    // The error below may be caused by using the wrong test environment, see https://jestjs.io/docs/configuration#testenvironment-string. Consider using the "jsdom" test environment.
    testEnvironment :"jsdom",

    // Test spec file resolution pattern
    // Matches parent folder `__tests__` and filename
    // should contain `test` or `spec`.
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    
    // Module file extensions for importing
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  }