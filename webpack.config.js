const path = require("path");

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
    watch: true
}