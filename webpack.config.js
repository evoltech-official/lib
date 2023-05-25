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
    library: 'evol',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: 'this',
  },
  resolve: {
    extensions: ['','.js'],
  },
  externals: {
    fs: 'commonjs fs',
    path: 'commonjs path',
    zlib: 'commonjs zlib',
    stream: 'commonjs stream',
    http: 'commonjs http',
    https: 'commonjs https',
    url: 'commonjs url',
    querystring: 'commonjs querystring',
    timers: 'commonjs timers',
    crypto: 'commonjs crypto',
    net: 'commonjs net',
    tls: 'commonjs tls',
    os: 'commonjs os',
  }
};