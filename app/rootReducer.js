import { combineReducers } from 'redux'
import messages from './reducers/messages'
import todos from './reducers/todos'
import { isLoading } from './reducers/loading'
import { loadError } from './reducers/loading'


export default combineReducers({
  messages,
  todos,
  isLoading,
  loadError
})

