import React from 'react'
import { Route , IndexRoute} from 'react-router'
import App from './components/App'
import RegisterPage from './components/register/RegisterPage'
import Todos from './components/Todos'

export default (
  <Route path="/" component={App} >
    <IndexRoute component={Todos} />
    <Route path="register" component={RegisterPage}/>
  </Route>
)
