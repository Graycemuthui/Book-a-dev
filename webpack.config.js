const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "production",
  devtool: "source-map",
  entry: {
    application: "./app/javascript/application.js",
    index: "./app/javascript/controllers/index.js",
  },
  performance: {
    hints: process.env.NODE_ENV === "production" ? "warning" : false,
  },

  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  output: {
    filename: "[name].js",
    sourceMapFilename: "[name].js.map",
    path: path.resolve(__dirname, "app/assets/builds"),
  },
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    }),
  ],
};
