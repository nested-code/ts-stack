module.exports = function (w) {
  process.env.NODE_ENV = 'test'
  return {
    name: '@amazebot',
    files: [
      { pattern: 'packages/**/src/**/*.ts', load: true },
      { pattern: 'packages/**/src/**/*.d.ts', ignore: true },
      { pattern: 'packages/**/src/**/*.test.ts', ignore: true },
      { pattern: 'packages/**/src/mocks/**', ignore: true },
      { pattern: 'packages/**/node_modules/**', ignore: true }
    ],
    tests: [
      { pattern: 'packages/**/src/**/*.test.ts', load: true },
      { pattern: 'packages/**/node_modules/**', ignore: true }
    ],
    filesWithNoCoverageCalculated: [
      'packages/**/src/index.ts'
    ],
    env: {
      type: 'node'
    },
    testFramework: 'jest',
    compilers: {
      '**/*.ts?(x)': w.compilers.typeScript({ isolatedModules: true })
    }
  }
}
