import jwt from 'jsonwebtoken'
import config from '../config/config'
import User from '../models/user'

export default (req, res, next) => {
  const authorizationHeader = req.headers['authorization']
  let token;

  if (authorizationHeader) {
    token = authorizationHeader.split(' ')[1];
  }

  if (token) {
    jwt.verify(token, config.jwtSecret, (err, decoded) => {
      if (err) {
        res.status(401).json({ error: 'Failed to authenticate' })
      } else {
        User.findOne({ email: decoded.username }, 'email', (error, user) => {
          if(user) {
            req.currentUser = user;
            next()
          }
          else {
           res.status(404).json({ error: 'No such user' })
          }
        })
      }
    })
  } else {
    res.status(403).json({
      error: 'No token provided'
    })
  }
}
