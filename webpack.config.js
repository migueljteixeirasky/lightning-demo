const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = () => {
  return {
    devServer: {
      compress: true,
      contentBase: path.join(__dirname, "static"),
      disableHostCheck: true,
      host: "0.0.0.0",
      inline: true,
      port: 80,
    },
    devtool: "sourcemaps",
    entry: ["./src/index.js"],
    mode: "development",
    module: {
      rules: [
        {
          // We're NOT transpiling node_modules, EXCEPT for the following packages:
          // * @lightningjs/core
          // * @lightningjs/sdk
          // * localCookie |> it's implemented as a class and needs transpiling
          exclude: /node_modules(?!\/(?:@lightningjs\/core|@lightningjs\/sdk|localCookie))/,
          test: /\.(mjs|js)$/,
          use: [
            {
              loader: "babel-loader",
              options: {
                cacheDirectory: true,
              },
            },
          ],
        },
        {
          test: /\.(svg|png)/,
          use: [
            {
              loader: "url-loader",
              options: {
                limit: 4096,
                name: "[hash].[ext]",
                outputPath: "images",
              },
            },
          ],
        },
      ],
    },
    optimization: {
      minimize: false,
    },
    output: {
      chunkFilename: "w.[name].bundle.js",
      filename: "[name].bundle.js",
      globalObject: "(self || window)",
      path: path.resolve(__dirname, "dist"),
    },
    plugins: [
      new HtmlWebpackPlugin({
        base: "",
        inject: true,
        minify: false,
        params: {},
        template: "html/index.ejs",
      }),
    ].filter((plugin) => Boolean(plugin)),
    resolve: {
      alias: {
        localCookie: "localCookie/src/localCookie",
      },
      extensions: [".mjs", ".js", ".json"],
    },
  };
};
