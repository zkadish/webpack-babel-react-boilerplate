const webpack = require('webpack');
const merge = require('webpack-merge'); // eslint-disable-line
const common = require('./webpack.common.js'); // eslint-disable-line

module.exports = merge(common, {
  plugins: [
    new webpack.DefinePlugin({
      DEVELOPMENT: JSON.stringify(process.env.NODE_ENV === 'development'),
    }),
  ],
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: './dist',
    port: 7777,
    hot: true,
    stats: 'errors-only',
    overlay: true,
  },
});
