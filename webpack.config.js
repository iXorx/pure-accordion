const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  watch: true,
  entry: "./src/js/index.js",
  output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js"
  },
  module: {
      rules: [
          {
              test: /\.js$/,
              exclude: /(node_modules)/,
              use: {
                  loader: "babel-loader",
                  options: {
                      presets: ["@babel/preset-env"]
                  }
              }
          },
          {
              test: /\.(sa|sc|c)ss$/,
              use: [
                  {
                      loader: MiniCssExtractPlugin.loader
                  },
                  {
                      // This loader resolves url() and @imports inside CSS
                      loader: "css-loader"
                  },
                  {
                      // Then we apply postCSS fixes like autoprefixer and minifying
                      loader: "postcss-loader"
                  },
                  {
                      // First we transform SASS to standard CSS
                      loader: "sass-loader",
                      options: {
                          implementation: require("sass")
                      }
                  }
              ]
          },
          {
              // Apply rule for fonts files
              test: /\.(woff|woff2|ttf|otf|eot|svg)$/,
              use: [
                  {
                      // Using file-loader too
                      loader: "file-loader",
                      options: {
                          outputPath: "fonts"
                      }
                  }
              ]
          }
      ]
  },
  plugins: [    
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'index.html'
    }),
    new MiniCssExtractPlugin({
        filename: "bundle.css"
    })
  ],
  mode: "development"
}