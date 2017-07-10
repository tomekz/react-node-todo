import React from 'react';
import RegisterForm from './RegisterForm'
import { connect } from 'react-redux'
import { addMessage } from '../../actions/messagesActions'

class RegisterPage extends React.Component {
  render() {
    const { registerRequest, addMessage } = this.props
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
            <RegisterForm addMessage = { addMessage }/>
        </div>
      </div>
    );
  }
}


RegisterPage.propTypes = {
  addMessage : React.PropTypes.func.isRequired
}

export default connect(null, { addMessage })(RegisterPage)
