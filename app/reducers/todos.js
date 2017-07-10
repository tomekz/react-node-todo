import { ADD_TODO, LOAD_TODOS_SUCCESS } from '../actions/types'

import shortid from 'shortid'

export default (state=[], action = {}) => {
  switch (action.type){
    case ADD_TODO: {
      return [
        ...state,
        {
          id: shortid.generate(),
          text: action.todo
        }
      ]
    }
    case LOAD_TODOS_SUCCESS: {
      return action.todos
    }
    default: return state
  }
}
