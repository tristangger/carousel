const path = require('path')
const webpack = require('webpack')
const CopyPlugin = require("copy-webpack-plugin");
const entry = __dirname + '/' + require('./package.json').entry;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    entry,
    output: {
        clean: true,
        path: path.join(__dirname, 'dist'),
        filename: require('./package.json').output.filename,
        library: require('./package.json').output.library,
    },
    mode: 'production',
    target: 'web',
    optimization: {
        minimizer: [new TerserPlugin({
            extractComments: false,
        })],
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [{
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/env",
                            "@babel/preset-typescript",
                            "@babel/preset-react",
                        ],
                        plugins: ["transform-class-properties", "add-module-exports"],
                    },
                    },
                    {
                        loader: 'ts-loader'
                    }
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: {
                                localIdentName: require('./package.json').name + '_[name]-[local]--[hash:base64:5]',
                            },

                        }
                    }
                ],
                include: /\.module\.css$/
            },
        ]
    },
    node: { global: true },
    plugins: [
        new webpack.ProvidePlugin({ React: 'react' }),
        new MiniCssExtractPlugin({
            filename: '../dist/css/style.css',
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: "public"
                },
            ],
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
    ],
    resolve: {
        extensions: [ ".js", ".jsx", ".tsx", ".ts" ],
        modules: [ 'node_modules', 'src' ]
    }
}
