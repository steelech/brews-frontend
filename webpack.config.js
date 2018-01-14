var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public/');
var APP_DIR = path.resolve(__dirname, 'src/client/app/');

var config = {
  entry: APP_DIR + '/app.js',
  output: {
    path: BUILD_DIR,
    filename: 'js/bundle.js',
  },
  module : {
    loaders : [
      {
        test : /\.js?/,
        include : APP_DIR,
        loader : 'babel-loader'
      }
    ]
  }
}

module.exports = config;
