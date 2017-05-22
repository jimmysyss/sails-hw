var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: 'eval',
  entry: [
    './assets/js',
  ],
  output: {
    path: path.resolve(__dirname, '.tmp/public/js'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      // requires "npm install --save-dev babel-loader"
      { test: /\.js$/, loaders: ['babel-loader?stage=0'] },
      { test: /\.css$/, loader: 'style!css' }
    ]
  }
};
