module.exports = {
  // transform: {
  //   '^.+\\.js$': 'babel-jest',
  // },
  testPathIgnorePatterns: ['/node_modules/', '/.history/'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '\\.module\\.css$': 'identity-obj-proxy',
    '\\.css$': require.resolve('./test/style-mock.js'),
  },
  snapshotSerializers: ['jest-emotion'],
}
