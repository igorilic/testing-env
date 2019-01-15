const path = require('path')
module.exports = {
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  testPathIgnorePatterns: ['/node_modules/', '/.history/'],
  testEnvironment: 'jest-environment-jsdom',
  moduleDirectories: [
    'node_modules',
    path.join(__dirname, 'src'),
    'shared',
    path.join(__dirname, 'lib'),
  ],
  moduleNameMapper: {
    '\\.module\\.css$': 'identity-obj-proxy',
    '\\.css$': require.resolve('./test/style-mock.js'),
  },
  snapshotSerializers: ['jest-emotion'],
  // before Jest is loaded
  setupFiles: [],
  // after Jest is loaded
  setupTestFrameworkScriptFile: require.resolve('./test/setup-test.js'),
  collectCoverageFrom: ['**/src/**/*.js', '**/lib/**/*.js'],
  coverageThreshold: {
    global: {
      statements: 30,
      branches: 20,
      lines: 25,
      functions: 20,
    },
  },
}
