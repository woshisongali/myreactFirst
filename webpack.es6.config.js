var webpack = require('webpack')
module.exports = {
  entry: {
    index: "./es6src/index.js",
    vendors: ["react", "react-dom"]
  },
  output: {
    filename: "[name].js",
    path: __dirname + "/es6dist"
  },

  devtool: "source-map",
  // devtool: "none",
  mode: 'production',

  resolve: {
    extensions: [ ".js", ".json"]
  },

  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },

  plugins: [
    // new webpack.optimize.CommonsChunkPlugin('vendor',  'vendor.js')
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'vendor',
    //   // filename: "vendor.js"
    //   // (Give the chunk a different name)

    //   minChunks: Infinity,
    //   // (with more entries, this ensures that no other module
    //   //  goes into the vendor chunk)
    // })
  ],
  optimization: {
    splitChunks: {
        cacheGroups: {
            commons: {
                name: "commons",
                chunks: "initial",
                minChunks: 2
            }
        }
    }
}

};