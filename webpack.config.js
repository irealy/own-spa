const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: './src/app.js',
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist'
  },
  devtool: 'eval-source-map',
  watch: true,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }, {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  devServer: {
    overlay: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],
};

