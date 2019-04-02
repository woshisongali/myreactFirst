var webpack = require('webpack')
const HtmlWebpackPlugin = require("html-webpack-plugin");
// console.log('===========')
// console.log(process.env.NODE_ENV)
module.exports = {
  entry: {
    index: "./es6src/index.js",
    vendors: ["react", "react-dom"]
  },
  output: {
    filename: "[name].js",
    path: __dirname + "/es6dist"
  },

  devServer: {
    port: 8086
  },
  devtool: "source-map",
  // devtool: "none",
  // mode: 'production',
  mode: process.env.NODE_ENV,

  resolve: {
    extensions: [ ".js", ".json"]
  },

  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      // template: './pages/program1/index/index.html'
      template: "./index.html"
    })
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