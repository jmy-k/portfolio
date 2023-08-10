const path = require("path");

module.exports = {
  entry: "./src/index.js",
  devtool: 'inline-source-map', //so i can see where the errors are coming from
  module: {
    rules: [
      {
        test: /\.(svg|png|jpe?g|gif|tiff)$/, //process these file types
        use: {
          loader: "file-loader",
          options: {
            esModule: false,
            name: "[name].[hash].[ext]",
          }
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", // send styles into DOM
        "css-loader"], //turn css into js
      },
      {
        test: /\.(pdf|txt)$/,
        include: path.resolve(__dirname, "src"),
        type: "asset/resource",
        generator: {
          filename: "[name][ext]",
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i, //font files
        type: 'asset/resource',
      },
    ]
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "assets/[name][ext]",
  },
};