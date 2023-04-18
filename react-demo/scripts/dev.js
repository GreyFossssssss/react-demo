const config = require('./config').dev

const webpackConfig = require('./webpack/webpack.dev.conf.js')
const Webpack = require('webpack')
const open = require('open')


const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

const {getHotMiddleware, getDevMiddleware } =  require('./utils/index')

const app = new Koa()
const compiler = Webpack(webpackConfig)

const devMiddleware = webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath
})
const hotMiddleware = webpackHotMiddleware(compiler)

app.use(getDevMiddleware(compiler, devMiddleware))
app.use(getHotMiddleware(compiler, hotMiddleware))

open(`http://${config.serve.host}:${config.serve.port}`)

app.listen(config.serve.port, () => {
    console.log('serve start' + config.serve.port)
})