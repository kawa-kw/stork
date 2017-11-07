const path = require('path');
const webpack = require('webpack');

module.exports = {
    context: path.resolve(__dirname, './_js'),
    entry: {
        main: './main.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './js_dist'),
        publicPath: '/js_dist',
    },
    watch: true,
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ],
    },
};
