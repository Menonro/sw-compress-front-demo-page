const path = require('path');

module.exports = {
  entry: './index.js', // входной файл
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // директория вывода
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  mode: 'development',
};