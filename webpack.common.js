const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniExtractTextPlugin = require('mini-css-extract-plugin');

console.log('process.env.NODE_ENV', process.env.NODE_ENV);

const devMode = process.env.NODE_ENV !== 'production';
module.exports = {
  entry: {
    app: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/, /test/],
        loader: 'babel-loader',
      },
      {
        test: /\.(scss|css)$/,
        use: [
          devMode ? 'style-loader' : MiniExtractTextPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      src: path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      DEVELOPMENT: JSON.stringify(process.env.NODE_ENV === 'development'),
      PRODUCTION: JSON.stringify(process.env.NODE_ENV === 'production'),
    }),
    new HtmlWebpackPlugin({
      title: 'Webpack Babel React Boilerplate!',
      template: 'src/index.html',
      inject: true,
    }),
    new MiniExtractTextPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
};
