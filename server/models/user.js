import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

let userSchema = mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  password_hash: {
    type: String,
    required: true
  },
  todos: [{
    type: String
  }]
})

userSchema.plugin(uniqueValidator)

export default mongoose.model('User', userSchema)

