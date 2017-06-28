var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./app/index.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js"
    },
    plugins: [new HtmlWebpackPlugin()],
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel_loader'},
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};