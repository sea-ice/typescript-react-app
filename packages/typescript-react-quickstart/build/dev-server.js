let webpack = require('webpack')
let webpackConfig = require('../webpack.config.js')

let WebpackDevServer = require('webpack-dev-server')
let Mock = require('mockjs')

let compiler = webpack(webpackConfig)
let devServerOpt = webpackConfig.devServer
let server = new WebpackDevServer(compiler, devServerOpt)

let {app} = server
let {mock} = Mock
app.get('/books', (req, res) => {
  res.json({
    code: 0,
    data: mock({
      'books|1-20': [{
        name: '@CTITLE',
        author: '@FIRST @LAST',
        'price|100-200.1': 1
      }]
    })
  })
})

server.listen(devServerOpt.port, '127.0.0.1', () => {
  console.log(`Server listened on port ${devServerOpt.port} successfully!`)
})
