import { ADD_MESSAGE, DELETE_MESSAGE } from './types'

export function addMessage (message) {
  return {
    type: ADD_MESSAGE,
    message: message
  }
}

export function deleteMessage (id) {
  return {
    type: DELETE_MESSAGE,
    id
  }
}
