const TsconfigPathPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
    entry: '',
    output: {},
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        plugins: [new TsconfigPathPlugin()]
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            use: 'babel-loader',
            exclude: /node_modules/,
        }, {
            test: /\.tsx?$/,
            loader: 'ts-loader',
            exclude: /node_modules/
        }, {
            test: /\.(woff|woff2|eot|ttf)$/,
            type: 'asset',
            generator: {
                fileName: 'font/[hash:7][ext]'
            }
        }, {
            test: /\.(png|jpg|gif|svg)$/,
            type: 'asset',
            generator: {
                fileName: 'font/[hash:7][ext]'
            }
        }]
    }
}