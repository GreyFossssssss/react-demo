const path = require("path"),
  webpack = require("webpack"),
  { merge } = require("webpack-merge"),
  ESlintPlugin = require("eslint-webpack-plugin"),
  config = require("../config/index.js").dev,
  BASE_CONFIG = require("./webpack.base.conf.js"),
  HtmlWebpackPlugin = require("html-webpack-plugin"),
  { getResolvePath } = require("../utils/index.js");

const CONFIG = merge(BASE_CONFIG, {
  mode: "development",
  entry: {
    index: [
      "webpack-hot-middleware/client",
      getResolvePath("page", "index", "index.tsx"),
    ],
  },
  output: {
    path: path.resolve(__dirname, "../..", config.dist),
    publicPath: config.publicPath,
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: ["style-loader", "less-loader", "style-resource-loader"],
      },
      {
        test: /\.css$/,
        use: ["css-loader"],
      },
    ],
  },
  resolve: {
    alias: {
      "react-dom": "@hot-loader/react-dom",
    },
  },
  target: "web",
  plugins: [
    new ESlintPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx'],
      fix: true
    })
  ]
});

module.exports = CONFIG;
