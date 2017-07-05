import { EventEmitter } from 'events'

import setAuthToken from '.././helpers/setAuthToken'
import jwt from 'jsonwebtoken'


class AuthStore extends EventEmitter{
  constructor(){
    super()
    this.currentUser = {
      isAuthenticated : false,
      email: ''
    }
  }

  setCurrentUser(token){
    if(token){
      const { username }  = jwt.decode(token)
      this.currentUser.isAuthenticated = true
      this.currentUser.email = username
    } else {
      this.currentUser.isAuthenticated = false
      this.currentUser.email = ''
    }
    this.emit('change')
  }

  getCurrentUser(){
    return this.currentUser
  }

}

const authStore = new AuthStore()
export default authStore
