module.exports = {
  entry: {
    index: "./src/index.tsx",
    vendors: ["react", "react-dom"]
  },
  output: {
    filename: "[name].js",
    path: __dirname + "/dist"
  },

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
  ],
};