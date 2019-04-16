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
    port: 8086,
    inline:true,
    noInfo:true,
    hot: true
  },
  devtool: "eval-source-map",
  // devtool: "none",
  // mode: 'production',
  mode: process.env.NODE_ENV,

  resolve: {
    extensions: [ ".js", ".json"]
  },

  module: {
    rules: [
      {
        test: /\.styl(us)?$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: { 
              modules: true, 
              localIdentName: '[hash:base64:5]__[local]' 
            }
          },
          {
            loader: 'stylus-loader'
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [ "style-loader", "css-loader"],
        exclude: /node_modules/
      },
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      // template: './pages/program1/index/index.html'
      template: "./index.html"
    })
  ],
  optimization: { //在开发环境中加，生产环境不加
		usedExports: true
	}

//   optimization: {
//     splitChunks: {
//         cacheGroups: {
//             commons: {
//                 name: "commons",
//                 chunks: "initial",
//                 minChunks: 2
//             }
//         }
//     }
// }

};