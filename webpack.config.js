// --------------------------------------------------------------------
// webpack-dev-server utils
const path = require('path');
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

console.log('Active mode: ', activeMode()); // eslint-disable-line no-console

const fileName = extention => {
    if (isDevelopment) return `[name].${extention}`;
    else if (isProduction) return `[contenthash].${extention}`;
};

const resolve = folder => path.resolve(__dirname, folder);
// --------------------------------------------------------------------

// Plugins
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const WorkboxPlugin = require('workbox-webpack-plugin');
const ESLintWebpackPlugin = require('eslint-webpack-plugin');
// const BabelESLintPlugin = require('babel-eslint-plugin');
// --------------------------------------------------------------------

module.exports = {
    context: resolve('src'),
    mode: 'development',
    entry: {
        main: ['./index.js'],
    },
    output: {
        filename: fileName('js'),
        path: resolve('dist'),
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
            '@': resolve('./src'),
            '@assets': resolve('src/assets'),
            '@css': resolve('src/css'),
            '@js': resolve('src/js'),
            '@scss': resolve('src/scss'),
            'process': 'process/browser',
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
            favicon: './favicon.ico',
            minify: {
                collapseWhitespace: isProduction,
            },

        }),
        new WorkboxPlugin.GenerateSW({
            clientsClaim: true,
            skipWaiting: true,
        }),
        new MiniCssExtractPlugin({
            filename: fileName('css'),
        }),
        new VueLoaderPlugin(),
        new webpack.ProvidePlugin({
            process: 'process/browser',
            _map: ['lodash', 'map'],
            Vue: ['vue/dist/vue.esm.js', 'default'],
        }),
        new ESLintWebpackPlugin({
            // context: resolve('src'),
            fix: true,
        }),
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.(scss|css)$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
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
