const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index.tsx",
    vendors: ["react", "react-dom"]
  },
  output: {
    filename: "[name].js",
    path: __dirname + "/dist"
  },
  // devServer: {
  //   port: 8086
  // },

  devtool: "source-map",
  mode: 'production',

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader" },

      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  },

  plugins: [
    // new HtmlWebpackPlugin({
    //   // template: './pages/program1/index/index.html'
    //   template: "./index.html"
    // })
  ],
};