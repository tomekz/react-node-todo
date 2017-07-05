import express from 'express'
import path from 'path'
import webpack from 'webpack'
import webpackMiddleware from 'webpack-dev-middleware'
import webpackConfig from '.././webpack.config'

let app = express()

const compiler = webpack(webpackConfig)
const config = require('./config/config')

app.use(webpackMiddleware(compiler))


app.get('/*', (req, res) => {
  // if (!req.cookies.access_token) return res.redirect("/login");
  res.sendFile(path.join(__dirname , './index.html'))
})

app.listen(config.port, () =>{
  console.log(`App listening on port ${config.port}`)
})
