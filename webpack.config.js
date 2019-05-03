// const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

let isDev = false;
let isProd = !isDev;

const config = {
  mode: isDev ? 'development' : 'production',
  devtool: isDev ? 'eval-source-map' : 'none',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/'
      }
    ]
  },
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    })
  ]
};

module.exports = config;