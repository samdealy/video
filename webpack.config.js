var path = require("path");

module.exports = {
  context: __dirname,
  entry: "./frontend/video.jsx",
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react']
        }
      },
     { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: [".js", ".jsx", "*"]
  }
};
