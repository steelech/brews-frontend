var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public/');
var APP_DIR = path.resolve(__dirname, 'src/client/app/');
var STYLES_DIR = path.resolve(__dirname, 'src/client/styles')
var ASSETS_DIR = path.resolve(__dirname, 'src/client/assets')

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
      },
      {
        test: /\.less$/,
        include: STYLES_DIR,
        loader: "style-loader!css-loader!autoprefixer-loader!less-loader"
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        include: ASSETS_DIR,
        loader: "file-loader"
      }
    ]
  }
}

module.exports = config;
