module.exports = {
    dev: {
        serve: {
            host: 'localhost',
            port: 8080
        },
        mode: 'development',
        publicPath: '/',
        src: './src',
        dist: './dist'
    },
    prod: {
        mode: 'production',
        publicPath: '/',
        src: './src',
        dist: './dist'
    }
}