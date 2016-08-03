var webpack = require('webpack')

module.exports = {
  entry: {
    app: ['babel-polyfill', './.temp/nanocollider.js'],
    vendor: require('./config/vendor')
  },
  output: {
    filename: '[name].bundle.js',
    path: './build'
  },
  module: {
    loaders: require('./config/loaders')
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js', Infinity),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development")
      }
    })
  ]
}
