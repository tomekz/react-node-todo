import express from 'express'
import Validator from 'validator'
import authenticate from '../middleware/authenticate';
import User from '../models/user';

let router = express.Router()

router.post('/', authenticate, (req, res) => {
  let user = req.currentUser
  User.findOne({ email: user.email }, 'todos', (error, user) => {
        if(user){
          user.todos = req.body.todos
          user.save( (err, udatedUser) => {
            if (err)  res.status(500).json(err)
          })
        }
        else  {
          res.status(404).json({ error: 'No such user' })
        }
      })
  res.status(201).json({ success: true })
})

router.get('/', authenticate, (req, res) => {
  let user = req.currentUser
  User.findOne({ email: user.email }, 'todos', (error, user) => {
    if(user) {
      res.json({ todos: user.todos})
    }
    else {
      res.status(404).json({ error: 'No such user' })
    }
  })
})


export default router
