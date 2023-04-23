const {merge} = require('webapck-merge')
const common = require('./webpack.common')


module.exports = merge(common, {
    mode: 'production'
})