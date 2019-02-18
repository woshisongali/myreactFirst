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
  mode: 'development',

  resolve: {
    extensions: [ ".js", ".json"]
  },

  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },

  plugins: [
  ],
};