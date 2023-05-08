const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devServer: {
    static: './',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'evol-lib.js',
    library: {
      name: 'evol',
      type: 'umd'
    },
    libraryExport: 'default',
  },
  resolve: {
    extensions: ['.js'],
  },
};