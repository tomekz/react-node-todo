import React from 'react'
import { Link } from 'react-router'
import AuthStore from '../stores/AuthStore'
import setAuthToken from '.././helpers/setAuthToken'
import { browserHistory } from 'react-router'

class Nav extends React.Component {

  constructor() {
    super()
    this.state = {
      currentUser: {}
    }
  }

  componentWillMount(){
      AuthStore.on('change', () =>{
          this.setState({ currentUser : AuthStore.getCurrentUser() })
      })
  }

  logout(e){
    e.preventDefault()
    localStorage.removeItem('jwtToken')
    setAuthToken(false)
    AuthStore.setCurrentUser(null)
    browserHistory.push('/')
  }
  render() {
    const { isAuthenticated } = this.state.currentUser

    const userLinks = (
      <ul className="nav navbar-nav navbar-right">
        <li><a href="#" onClick = {this.logout.bind(this)} >Logout</a></li>
      </ul>
    );

    const guestLinks = (
      <ul className="nav navbar-nav navbar-right">
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    );

    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">TODOS</Link>
          </div>
          <div className="collapse navbar-collapse">
            { isAuthenticated ? userLinks : guestLinks }
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav
