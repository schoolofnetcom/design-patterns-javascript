const { resolve } = require('path');
const publicPath = resolve(__dirname, 'public');

module.exports = {
  entry: {
    singleton: './singleton/index.js',
    module: './module/index.js',
    prototype: './prototype/index.js',
    factory: './factory/index.js',
    observer: './observer/index.js',
  },
  output: {
    path: publicPath + '/dist',
    filename: '[name].bundle.js'
  },
  devServer: {
    contentBase: publicPath,
    compress: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}