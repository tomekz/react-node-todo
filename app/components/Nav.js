import React from 'react'
import { Link } from 'react-router'
import setAuthToken from '.././helpers/setAuthToken'
import { browserHistory } from 'react-router'
import { setCurrentUser } from '../actions/authActions'
import { connect } from 'react-redux'

class Nav extends React.Component {

  constructor() {
    super()
    this.state = {
      currentUser: {}
    }
  }

  logout(e){
    e.preventDefault()
    localStorage.removeItem('jwtToken')
    setAuthToken(false)
    this.props.setCurrentUser({})
    browserHistory.push('/')
  }
  render() {
    const userLinks = (
      <ul className="nav navbar-nav navbar-right">
        <li><Link to="/todos">Todos</Link></li>
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
            <Link to="/" className="navbar-brand">Home</Link>
          </div>
          <div className="collapse navbar-collapse">
            { this.props.isAuthenticated ? userLinks : guestLinks }
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    isAuthenticated: state.auth.isAuthenticated
  }
}

Nav.PropTypes = {
  setCurrentUser: React.PropTypes.func.isRequired,
  user: React.PropTypes.object.isRequired,
  isAuthenticated: React.PropTypes.bool.isRequired
}

export default connect(mapStateToProps, {setCurrentUser})(Nav)

