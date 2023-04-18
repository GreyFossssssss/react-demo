const webpack = require('webpack')
const webpackConfig = require('./webpack/webpack.prod.conf.js')

webpack(webpackConfig, (err, stats) => {
    if(err) {
        console.error(err.stack || err)
        if(err.details) {
            console.error(err.details)
        }
        return 
    }

    const info = stats.toJson()
    if(stats.hasErrors()) {
        console.error(info.errors)
    }
    if(stats.hasWarnings()) {
        console.warn(info.warnings)
    }

    console.log(stats.toString({
        colors: true,
        chunks: false,
        builtAt: true,
        assets: false,
        warnings: false,
        version: false,
        source: false,
        hash: false,
        modules: false,
        reasons: false
    }))
})