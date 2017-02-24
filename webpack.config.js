/**
 * Created by Acer on 2017/2/21.
 */

var path = require('path')
var config = {
    entry: path.resolve(__dirname, './component/main.js'),


    output: {
        path:path.resolve(__dirname,""),
        filename: 'index.js',
    },

    devServer: {
        inline: true,
        port: 7778
    },

    module: {
        loaders: [ {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',

            query: {
                presets: ['es2015', 'react']
            },

        },
            {
                test: /\.css$/,
                loader: 'style!css',
                include: __dirname,
            },
            {test: /\.(jpg|png|svg)$/, loader: "url?limit=8192"},
        ]
    }

}

module.exports = config;
