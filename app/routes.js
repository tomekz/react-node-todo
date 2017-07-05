import React from 'react'
import { Route , IndexRoute} from 'react-router'
import App from './components/App'
import RegisterPage from './components/register/RegisterPage'
import LoginPage from './components/login/LoginPage'
import Hello from './components/Hello'
import TodosPage from './components/todos/TodosPage'

export default (
  <Route path="/" component={App} >
    <IndexRoute component={Hello} />
    <Route path="register" component={RegisterPage}/>
    <Route path="login" component={LoginPage}/>
    <Route path="todos" component={TodosPage}/>
  </Route>
)
