import { EventEmitter } from 'events'

import setAuthToken from '.././helpers/setAuthToken'
import jwt from 'jsonwebtoken'
import axios from 'axios'

class TodosStore extends EventEmitter{
  constructor(){
    super()
    this.todos = []
  }

  addTodo(todo){
    this.todos.push(todo)
    axios.post('/api/todos ', {todos: this.todos}).then(
      (res) => {
        this.emit('change')
      },
      (error) => console.log(error)
    )
  }

  set(todos){
    this.todos = todos
  }

  getAll(){
    return this.todos
  }

  getAllFromDb(){
    return axios.get('/api/todos')
  }
}

const todosStore = new TodosStore()
export default todosStore
