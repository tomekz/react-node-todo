import React from 'react'
import ReactDOM from 'react-dom'
import routes from './routes'
import rootReducer from './rootReducer'
import setAuthToken from './helpers/setAuthToken'
import { setCurrentUser } from './actions/authActions'
import { Router, browserHistory } from 'react-router'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import jwtDecode from 'jwt-decode'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
  applyMiddleware(thunk)
))

if(localStorage.jwtToken){
  setAuthToken(localStorage.jwtToken)
  store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
}

ReactDOM.render(
    <Provider store = { store } >
      <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
)
