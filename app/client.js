import React from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'
import routes from './routes'
import setAuthToken from './helpers/setAuthToken'
import jwt from 'jsonwebtoken'

if(localStorage.jwtToken){
  setAuthToken(localStorage.jwtToken)
}

ReactDOM.render(
    <Router history={browserHistory} routes={routes} />,
     document.getElementById('app')
);
