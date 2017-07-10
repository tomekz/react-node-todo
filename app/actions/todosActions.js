import {  ADD_TODO, LOAD_TODOS_SUCCESS, LOAD_TODOS_ISLOADING, LOAD_TODOS_FAILURE, SAVE_TODOS_SUCCESS, SAVE_TODOS_FAILURE} from './types'
import { addMessage } from './messagesActions'
import axios from 'axios'

export function addTodo(todo){
  return {
    type: ADD_TODO,
    todo
  }
}

export function itemsHasErrored(loadError) {
    return {
      type: LOAD_TODOS_FAILURE,
      loadError
    }
}

export function itemsIsLoading(bool) {
    return {
      type: LOAD_TODOS_ISLOADING,
      isLoading: bool
    }
}

export function todosFetchedSuccess(todos) {
    return {
      type: LOAD_TODOS_SUCCESS,
      todos
    }
}

export function saveTodosSuccess(bool) {
    return {
      type: SAVE_TODOS_SUCCESS,
      saved: true
    }
}

export function saveTodosFailure(error) {
    return {
      type: SAVE_TODOS_FAILURE,
      error
    }
}

export function loadTodos(url) {
  return dispatch => {
    dispatch(itemsIsLoading(true))
    axios.get(url)
      .then(
        res => dispatch(todosFetchedSuccess(res.data.todos)),
        err => dispatch(itemsHasErrored(err))
      )
  }
}

export function saveTodos(url) {
  return (dispatch, getState) => {
    axios.post(url, {todos: getState().todos})
      .then(
        res => dispatch(saveTodosSuccess(true)),
        err => {
          dispatch(saveTodosFailure(err.response.data.error))
        }
      )
  }
}
