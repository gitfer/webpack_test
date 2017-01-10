'use strict';

// Modules
var webpack = require('webpack');

module.exports = function makeWebpackConfig() {
    var config = {};

    config.entry = {
        app: './src/index.js'
    };
    config.output = {
        filename: 'bundle.js',
        path: './dist'
    };
    // Initialize module
    config.module = {
        preLoaders: [],
        loaders: [{
            // JS LOADER
            // Reference: https://github.com/babel/babel-loader
            // Transpile .js files using babel-loader
            // Compiles ES6 and ES7 into ES5 code
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
		      presets: ['es2015'],
		      plugins: ['transform-runtime']
		    }
        },  {
            test: /angular\.min\.js$/,
            loader: 'exports?angular'
        }]
    };
    return config;
}();
