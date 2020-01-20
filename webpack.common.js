const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractplugin = require('mini-css-extract-plugin');

/**
 * Setup entry and output
 * Include any plulgins that are required in both environments
 */
module.exports = {
    entry: __dirname + '/src/index.js',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: "/node_modules/",
                use: [
                    {
                        loader: "babel-loader",
                    }
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: {
                            minimize: true
                        }
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: [
        // new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Production',
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new miniCssExtractplugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    }
};