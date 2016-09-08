const path = require('path');
module.exports = {
  entry: './entry.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'react-hot!babel'},
      {test: /\.css$/, loader: 'style!css'},
      {test: /\.(jpg|png|svg)$/, loader: 'url?limit=8192'}
    ]
  }
};
