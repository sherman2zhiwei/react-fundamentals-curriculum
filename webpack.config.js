var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./app/index.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js"
    },
    plugins: [new HtmlWebpackPlugin({
        template: 'app/index.html'
    })],
    module: {
        loaders: [
            {test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader', query: {
                presets: ['env', 'react']
            }},
            { test: /\.css$/, loader: ["style-loader", "css-loader"]},
            {test: /\.svg/, use: {loader: 'svg-url-loader', 
                                  options: {}
                                  }
            }
        ]
    }
};