// --------------------------------------------------------------------
// webpack-dev-server utils
const development = 'development';
const production = 'production';
const isDevelopment = process.env.NODE_ENV === development;
const isProduction = process.env.NODE_ENV === production;

const activeMode = () => {
    let consoleText = '';

    if (isDevelopment) consoleText = development;
    else if (isProduction) consoleText = production;

    return consoleText;
};
console.log('Active mode: ', activeMode());

const fileName = (extention) => {
    if (isDevelopment) return `[name].${extention}`;
    else if (isProduction) return `[name].[contenthash].${extention}`;
};
// --------------------------------------------------------------------

// Plugins
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
// --------------------------------------------------------------------

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        main: ['./index.js'],
    },
    output: {
        filename: fileName('js'),
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    devtool: isDevelopment ? 'source-map' : false,
    devServer: {
        historyApiFallback: true,
        static: {
            directory: path.join(__dirname, 'src'),
        },
        hot: isDevelopment,
        open: true,
        compress: true,
        port: 9000,
        client: {
            reconnect: 5,
            overlay: {
                errors: true,
                warnings: false,
            },
        },
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html',
            minify: {
                collapseWhitespace: isProduction,
            },
            // favicon: './assets/favicon.ico', // кладет фавикон рядом с index.html
        }),
    ],
    module: {
        rules: [],
    },
};