const {merge} = require('webpack-merge')
const common = require('./webpack.common')
const {CleanWebpackPlugin} = require('clean-webpack-plugin') // 清空dist
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin") // 压缩css
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin


module.exports = merge(common, {
    mode: 'production',
    plugins: [new CleanWebpackPlugin(), new CssMinimizerWebpackPlugin(), new BundleAnalyzerPlugin()]
})