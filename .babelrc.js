const isProd = String(process.env.NODE_ENV) === 'production'
const isTest = String(process.env.NODE_ENV) === 'test'

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {modules: isTest ? 'commonjs' : false, targets: {node: 'current'}},
    ],
    '@babel/preset-react',
  ],
  plugins: [
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
    [
      'babel-plugin-jsx-pragmatic',
      {export: 'jsx', module: '@emotion/core', import: '___EmotionJSX'},
    ],
    [
      '@babel/plugin-transform-react-jsx',
      {pragma: '___EmotionJSX', pragmaFrag: 'React.Fragment'},
    ],
    [
      'emotion',
      {
        sourceMap: !isProd,
        autoLabel: !isProd,
        labelFormat: '[filename]--[local]',
        cssPropOptimization: true,
      },
    ],
    'react-loadable/babel',
  ].filter(Boolean),
}
