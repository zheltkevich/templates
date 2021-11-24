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
    else if (isProduction) return `[contenthash].${extention}`;
};
// --------------------------------------------------------------------

// Plugins
const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
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
        splitChunks: {
            chunks: 'all',
        },
        minimizer: [
            new TerserPlugin(),
            new CssMinimizerPlugin(),
        ],
      },
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html',
            favicon: './assets/icons/favicon.ico',
            minify: {
                collapseWhitespace: isProduction,
            },

        }),
        new MiniCssExtractPlugin({
            filename: fileName('css'),
        }),
        new webpack.ProvidePlugin({
            _map: ['lodash', 'map'],
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(scss|css)$/i,
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
            {
                test: /\.(ttf|woff|woff2|eot)$/i,
                type: 'asset/resource',
                generator: {
                    filename: `assets/fonts/${fileName('[ext]')}`,
                },
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: `assets/img/${fileName('[ext]')}`,
                },
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
};
