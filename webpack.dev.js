const webpack = require('webpack')

const common = require('./webpack.common')

module.exports = {
  ...common,
  mode: 'development',
  devServer: {
    contentBase: './dist',
    hot: true
  }
}
