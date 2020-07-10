const { resolve } = require('path');

const publicPath = resolve(__dirname, 'public');

module.exports = {
  entry: {
    app: './index.js',
    singleton: './singleton/index.js',
    module: './module/index.js',
    observer: './observer/index.js',
    prototype: './prototype/index.js',
    factory: './factory/index.js',
  },
  devServer: {
    contentBase: resolve(__dirname, 'public'),
  },
  output: {
    path: __dirname + 'dist',
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}