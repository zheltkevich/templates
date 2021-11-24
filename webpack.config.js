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
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
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
            '@assets': path.resolve(__dirname, 'src/assets'),
            '@css': path.resolve(__dirname, 'src/css'),
            '@js': path.resolve(__dirname, 'src/js'),
            '@scss': path.resolve(__dirname, 'src/scss'),
        },
    },
    optimization: {
        minimize: true,
        minimizer: [
            // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
            // `...`,
            new CssMinimizerPlugin(),
        ],
      },
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html',
            minify: {
                collapseWhitespace: isProduction,
            },
            // favicon: './assets/favicon.ico', // кладет фавикон рядом с index.html
        }),
        new MiniCssExtractPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.(scss|css)$/i, // CSS, PostCSS, Sass/Scss
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        },
                    },
                ],
            },
        ],
    },
};
