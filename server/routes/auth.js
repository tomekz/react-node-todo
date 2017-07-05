import express from 'express'
import Validator from 'validator'
import isEmpty from 'lodash/isEmpty'
import validations from '.././validations/login'
import User from '.././models/user'
import bcrypt from 'bcrypt-nodejs'
import config from '../config/config'
import jwt from 'jsonwebtoken'

let router = express.Router()

router.post('/', (req, res) => {
    const { errors , isValid } = validations(req.body.user)
    if (isValid) {
      const { email, password } = req.body.user

      User.findOne({ email: email }, 'email password_hash', (error, user) =>{
        if(error){
           res.status(500).json(error)
        }
        else if(user) {
          if(bcrypt.compareSync(password, user.password_hash)){
            const token = jwt.sign({
              id: user.id,
              username: user.email
            }, config.jwtSecret)
            res.json({ token })
          } else {
            res.status(401).json({errors: { form: 'Invalid credentials'}})
          }
        }
        else {
          res.status(401).json({errors: { form: 'Invalid credentials'}})
        }
      })
    } else {
      res.status(400).json({errors : errors})
    }
})

export default router
