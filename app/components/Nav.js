import React from 'react';
import { Link } from 'react-router';
// import { connect } from 'react-redux';
// import { logout } from '../actions/authActions';

class Nav extends React.Component {
  // logout(e) {
  //   e.preventDefault();
  //   this.props.logout();
  // }
  constructor() {
    super()
  }

  render() {
    const { isAuthenticated } = false //this.props.auth;

    const userLinks = (
      <ul className="nav navbar-nav navbar-right">
        {/*<li><a href="#" onClick={this.logout.bind(this)}>Logout</a></li>*/}
        <li><a href="#">Logout</a></li>
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
// NavigationBar.propTypes = {
//   auth: React.PropTypes.object.isRequired,
//   logout: React.PropTypes.func.isRequired
// }

// function mapStateToProps(state) {
//   return {
//     auth: state.auth
//   };
// }

// export default connect(mapStateToProps, { logout })(NavigationBar);
