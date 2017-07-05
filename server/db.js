
import mongoose from 'mongoose'
import config from './config/config'

export default function() {

  mongoose.connect(config.db.url)
  let db = mongoose.connection

  db.once('open', () => {
    console.log(`connected to ${config.db.url}`)
  })

  db.once('error', (error) => {
    console.log(error)
  })
}
