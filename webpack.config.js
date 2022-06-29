const path = require('path')
const webpack = require('webpack')
const entry = __dirname + '/' + require('./package.json').entry;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry,
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
        filename: require('./package.json').output.filename,
        library: require('./package.json').output.library,
    },
    mode: 'development',
    devServer: {
        static:"dist"
    },
    target: 'web',
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.(js|jsx|tsx|ts)$/,
                exclude: /node_modules/,
                use: {
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
        extensions: [ ".js", ".jsx", ".tsx", ".ts", ".jpeg" ],
        modules: [ 'node_modules', 'src' ]
    }
}
