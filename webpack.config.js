const path = require("path");
const slsw = require("serverless-webpack");

const entries = {};

Object.keys(slsw.lib.entries).forEach(
  key => (entries[key] = [ /* "./source-map-install.js", */ slsw.lib.entries[key]])
);

module.exports = {
  mode: slsw.lib.webpack.isLocal ? "development" : "production",
  entry: slsw.lib.entries,
  // {
  //   ...entries,
  //   schema: path.join(__dirname, "schema.graphql")
  // },
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx", ".mjs", ".graphql"]
  },
  output: {
    libraryTarget: "commonjs",
    path: path.join(__dirname, ".webpack"),
    filename: "[name].js"
  },
  target: "node",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          transpileOnly: true
        }
      },
      {
        type: "javascript/auto",
        test: /\.mjs$/,
        use: []
      },
      {
        test: /\.(graphql)$/,
        use: [
          {
            loader: "file-loader"
          }
        ]
      }
    ]
  }
};
