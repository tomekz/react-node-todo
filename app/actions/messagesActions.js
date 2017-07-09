import { ADD_MESSAGE } from './types'

export function addMessage (message) {
  return {
    type: ADD_MESSAGE,
    message: message
  }
}
