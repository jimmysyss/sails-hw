// config/webpack.js

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');

var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: 'assets/index.html',
  filename: 'index.html',
  inject: 'body'
})

// compile js assets into a single bundle file
module.exports.webpack = {
  config: {
    devtool: 'eval',
    entry: [
      path.resolve(__dirname, '../assets/js/index.js')
    ],
    output: {
      path: path.resolve(__dirname, '../.tmp/public'),
      filename: 'bundle.js'
    },
    plugins: [
      new CopyWebpackPlugin([{ from: 'assets/docs', to: 'docs'}]),
      HtmlWebpackPluginConfig,
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    ],
    module: {
      loaders: [
        // requires "npm install --save-dev babel-loader"
        // { test: /\.js$/, loaders: ['babel-loader?stage=0'] },
        // { test: /\.css$/, loader: 'style!css' }
        { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
        { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
      ]
    }
  },

  // docs: https://webpack.github.io/docs/node.js-api.html#compiler
  watchOptions: {
    aggregateTimeout: 300
  }
};
