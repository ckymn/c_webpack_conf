const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/js/index.js",
    output: {
        path: path.resolve(__dirname,"dist"),
        filename: "js/bundle.js"
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    },
    watch: true,
    plugins: [
         new HtmlWebpackPlugin({
             filename: "index.html",
             template: "./src/index.html"
         })
    ]
}