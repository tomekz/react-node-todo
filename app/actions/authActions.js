import { SET_CURRENT_USER } from './types'
import axios from 'axios'
import setAuthToken from '../helpers/setAuthToken'
import { browserHistory } from 'react-router'

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  }
}
