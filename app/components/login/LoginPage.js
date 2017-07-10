import React from 'react'
import LoginForm from './LoginForm'
import { connect } from 'react-redux'
import { addMessage } from '../../actions/messagesActions'


class LoginPage extends React.Component{
  render(){
     return(
       <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <LoginForm addMessage = {this.props.addMessage}/>
        </div>
       </div>
     )
  }
}

LoginPage.PropTypes = {
  addMessage: React.PropTypes.func.isRequired
}

export default connect(null, {addMessage})(LoginPage)
