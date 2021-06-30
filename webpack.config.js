const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
        "babel-polyfill",
        "./src/js/index.js"
    ],
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
             template: path.resolve(__dirname, "src","index.html")
         })
    ],
    module: {
        rules : [
            {
                test : /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    }
}