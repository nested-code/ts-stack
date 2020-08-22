module.exports = ({ compilers }) => ({
  name: '@ts-stack',
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
    '**/*.ts?(x)': compilers.typeScript({ isolatedModules: true })
  }
})
