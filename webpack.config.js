var Path = require('path');
var webpack = require('webpack');

const ExtractTextPlugin = require("extract-text-webpack-plugin");
var cssOutputPath = './app.css';
var jsOutputPath = 'bundle.js';
var ExtractSASS = new ExtractTextPlugin(cssOutputPath);

var webpackConfig = {
    plugins: [],
    module: {
        // loaders: ['style-loader', 'css-loader', 'sass-loader'],
        loaders: [],
    }
}

webpackConfig.module.loaders.push({
    test: /\.scss$/,
    // loaders: ['style-loader', 'css-loader', 'sass-loader'],
    use: [{
            loader: 'style-loader',
        },
        {
            loader: 'css-loader',
        },
        {
            loader: 'postcss-loader',
        },
        {
            loader: 'sass-loader',
            options: {
                includePaths: [Path.resolve(__dirname, 'styles/*.scss')],
            },
        },
    ],
});
webpackConfig.entry = [Path.join(__dirname, './app.js')]
webpackConfig.output = {
    path: Path.join(__dirname, './dist'),
    filename: jsOutputPath,
};
webpackConfig.plugins.push(ExtractSASS);

module.exports = webpackConfig;