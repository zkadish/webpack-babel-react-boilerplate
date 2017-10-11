const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

console.log('process.env.NODE_ENV', process.env.NODE_ENV);

const extractSass = new ExtractTextWebpackPlugin({
  filename: '[name].css',
  disable: process.env.NODE_ENV === 'development',
});

module.exports = {
  entry: { 
    app: [
      'react-hot-loader/patch',
      './src/index.js',
    ]
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
        loader: extractSass.extract({
          use: [
            { loader: 'css-loader', options: { importLoaders: 1 } },
            'postcss-loader',
            { loader: 'sass-loader' },
          ],
          fallback: 'style-loader',
        }),
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
    new HtmlWebpackPlugin({
      title: 'Webpack Babel React Boilerplate!',
      template: 'src/index.html',
      inject: true,
    }),
    extractSass,
  ],
};
