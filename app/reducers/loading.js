import { LOAD_TODOS_ISLOADING, LOAD_TODOS_FAILURE, SAVE_TODOS_FAILURE } from '../actions/types'

export function isLoading (state=false, action = {}) {
  switch (action.type){
    case LOAD_TODOS_ISLOADING: {
      return action.isLoading
    }
    default: return state
  }
}

export function loadError (state={}, action = {}) {
  switch (action.type){
    case LOAD_TODOS_FAILURE: {
      return action.loadError
    }
    case SAVE_TODOS_FAILURE: {
      return action.error
    }
    default: return state
  }
}

