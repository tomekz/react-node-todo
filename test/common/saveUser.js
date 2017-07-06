import bcrypt from 'bcrypt-nodejs'
import User from '../.././server/models/user'

export default function (data, cb) {
  const { email, password } = data
  const password_hash = bcrypt.hashSync(password)
  const user = new User({ email, password_hash })
  user.save(cb())
}
