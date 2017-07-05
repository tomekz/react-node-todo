import express from 'express'
import Validator from 'validator'
import isEmpty from 'lodash/isEmpty'
import validations from '.././validations/register'
import User from '.././models/user'
import bcrypt from 'bcrypt-nodejs'
import config from '../config/config'

let router = express.Router()

/**
 * @api {post} /api/users Add a user
 * @apiGroup Users
 * @apiParam {email} email User email
 * @apiParam {password} password User password
 * @apiParam {passwordConfiframtion} passwordConfiframtion User passwordConfiframtion
 * @apiParamExample {json} Input
 *    {
 *      "email": "user1@gmail.com",
 *      "password": "123",
 *      "passwordConfiframtion": "123"
 *    }
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 You've regesitered successfully, please login
 * @apiErrorExample {json} Insert error
 *    HTTP/1.1 500 Internal Server Error
 */
router.post('/', (req, res) => {
    const { errors , isValid } = validations(req.body.user)
    if (isValid) {
      const { email, password } = req.body.user
      const password_hash = bcrypt.hashSync(password)
      const user = new User({ email, password_hash })
      user.save((error) => {
        error ? res.status(500).json(error) : res.json( {success: "You've regesitered successfully, please login"})
      })
    } else {
      res.status(400).json(errors)
    }
})

export default router
