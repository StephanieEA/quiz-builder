var path = require("path");

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, "build"),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      { test: /\.css$/, loader: 'style-loader!css-loader' }
    ]
  },
  devServer: {
    contentBase: './build',
    inline: true
  },
  resolve: {
    extensions: ['*', '.js', '.json', '.jsx']
  }
}
