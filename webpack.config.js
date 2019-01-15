const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js',
  },
  resolve: {
    modules: [
      'node_modules',
      path.join(__dirname, 'src'),
      'shared',
      path.join(__dirname, 'lib'),
    ],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /\.module\.css$/,
        use: [{loader: 'style-loader'}, {loader: 'css-loader'}],
      },
      {
        test: /\.module\.css$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader', options: {modules: true, camelCase: true}},
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: ['/node_modules/', '/.history/'],
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: 'file-loader',
      },
    ],
  },
}

if (process.env.WEBPACK_SERVE) {
  module.exports.mode = 'development'
  module.exports.serve = {
    content: path.join(__dirname, './public'),
  }
}
