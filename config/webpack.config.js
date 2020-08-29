const Webpack = require('webpack');

const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

const Paths = require('./paths');

const PRODUCTION_MODE = 'production';
const MOCK_MODE = 'mock';

const config = (env = {}, argv = {}) => {
    const { MODE = PRODUCTION_MODE } = env;

    const isProductionMode = MODE === PRODUCTION_MODE;
    const definePlugin = new Webpack.DefinePlugin({
        IGNORE_FETCH_WARNINGS: false,
        IS_DEVELOPMENT: !isProductionMode,
        IS_MOCK: MODE === MOCK_MODE,
        SILENCE_LOGS: false
    });
    const htmlPlugin = new HtmlWebPackPlugin({
        template: Paths.APP_HTML,
        filename: './index.html',
        title: 'react-gmp'
    });
    const cssPlugin = new MiniCssExtractPlugin({});
    
    const plugins = [
        definePlugin,
        htmlPlugin,
        cssPlugin
    ].filter(Boolean);

    return {
        devtool: !isProductionMode ? 'cheap-module-source-map' : '',
        entry: [
            path.resolve(Paths.APP_SRC, 'polyfills.js'),
            Paths.APP_INDEX_JS
        ],
        output: {
            filename: '[name].[contenthash].js',
            path: Paths.APP_DIST,
            publicPath: Paths.APP_ASSETS
        },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: !isProductionMode
                        }
                    }, {
                        loader: 'css-loader'
                    }]
                },
                {
                    test: /\.scss$/,
                    use: [
                        'style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true
                            }
                        },
                        'sass-loader'
                    ]
                },
                {
                    test: /\.(png|jpg|gif|svg)$/,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                name: '[name].[ext]',
                                limit: 8192
                            }
                        }
                    ]
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                },
                {
                    include: /\.doc$/,
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]'
                    }
                }
            ]
        },
        node: {
            constants: false
        },
        plugins,
        optimization: {
            splitChunks: {
                cacheGroups: {
                    commons: { test: /[\\/]node_modules[\\/]/, name: 'vendor', chunks: 'all' }
                },
                name: !isProductionMode
            }
        },
        resolve: {
            modules: [Paths.APP_SRC, Paths.NODE_MODULES_DIR],
            symlinks: false
        },
        performance: {
            hints: false
        }
    };
};

module.exports = config;
