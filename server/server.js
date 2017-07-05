import express from 'express'
import path from 'path'
import webpack from 'webpack'
import webpackMiddleware from 'webpack-dev-middleware'
import webpackConfig from '.././webpack.config'
import bodyParser from 'body-parser'
import dbConnect from './db'
import config from './config/config'

import auth from './routes/auth'
import users from './routes/users'
import todos from './routes/todos'

let app = express()

app.use(bodyParser.json())

app.use('/api/users', users)
app.use('/api/todos', todos)
app.use('/api/auth', auth)

app.use(webpackMiddleware(webpack(webpackConfig)))

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname , './index.html'))
})

dbConnect()

app.listen(config.port, () =>{
  console.log(`App listening on port ${config.port}`)
})
