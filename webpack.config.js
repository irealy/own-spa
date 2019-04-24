module.exports = {
  entry: './src/js/app.js',
  output: {
    filename: 'app.js'
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env']
          }
        }
      },{
        test: /\.pug$/,
        use: 'pug-loader'
      }, {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      }
    ]

  }

};

