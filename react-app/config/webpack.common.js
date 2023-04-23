const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin") // 单独生成css文件
const TerserPlugin = require('terser-webpack-plugin') // js代码压缩
const WebpackBar = require("webpackbar") // 打包进度

module.exports = {
    entry: {
        index: path.join(__dirname, '../src/index.js')
    },
    output: {
        filename: "[name].[hash:4].js",
        path: path.join(__dirname, '../dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../template.html'),
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin(),
        new WebpackBar()
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)/,
                loader: 'babel-loader'
            },
            {
                test: /\.(css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                        importLoaders: 1,
                        },
                    }, {
                        loader: "postcss-loader",
                    }]
            },
            {
                test: /\.(less)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 2,
                        },
                    },
                    {
                        loader: "postcss-loader",
                    },
                    "less-loader"
                ]
            },
            {
                test: /\.(bmp|gif|png|jpe?g)$/,
                use: [
                  {
                    loader: "url-loader",
                    options: {
                      limit: 10 * 1024,
                      name: "[name].[contenthash:8].[ext]",
                      outputPath: "assets/images",
                    },
                  },
                ],
            },
            {
                test: /\.(ttf|woff|woff2|eot|otf)$/,
                use: [
                    {
                    loader: "url-loader",
                    options: {
                        name: "[name].[contenthash:8].[ext]",
                        outputPath: "assets/fonts",
                    },
                    },
                ],
            }
        ]
    },
    stats: {
        modules: false
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
                extractComments: false // 不生产lincense
            })
        ]
    },
    externals: {
        react: 'react',
        'react-dom' : 'ReactDOM'
    }
}