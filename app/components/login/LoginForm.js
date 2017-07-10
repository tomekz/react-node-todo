import React from 'react'
import FormTextField from '../common/FormTextField'
import axios from 'axios'
import { browserHistory } from 'react-router'
import setAuthToken from '../../helpers/setAuthToken'
import jwt from 'jsonwebtoken'
import AuthStore from '../.././stores/AuthStore'
import { addMessage } from '../../actions/messagesActions'

class LoginForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: '',
      errors: {},
      isLoading: false
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }
  render(){
    const { errors, email, password, isLoading } = this.state

     return(
       <form className="row" onSubmit={this.onSubmit}>
        <h2>Login</h2>

        { errors.form && <div className="alert alert-danger">{errors.form}</div> }

        <FormTextField
          field="email"
          label="Email"
          value={email}
          error={errors.email}
          onChange={this.onChange}
        />

        <FormTextField
          field="password"
          label="Password"
          value={password}
          error={errors.password}
          onChange={this.onChange}
          type="password"
        />

        <div className="form-group"><button className="btn btn-primary" disabled={isLoading}>Login</button></div>
       </form >
     )
  }

  onChange(e){
    this.setState({[e.target.name]: e.target.value})
  }

  onSubmit(e){
    this.setState({ errors: {} , isLoading: true})
    e.preventDefault()
    axios.post('/api/auth ', {user: this.state}).then(
      (res) => {
        this.props.addMessage({
          type: 'success',
          text: `Welcome ${this.state.email} !`
        })
        const token = res.data.token
        localStorage.setItem('jwtToken', token)
        setAuthToken(token)
        AuthStore.setCurrentUser(token)
        browserHistory.push('/todos')
      },
      (error) => {
        this.setState({errors: error.response.data.errors, isLoading: false})
      }
    )
  }
}

LoginForm.PropTypes = {
  addMessage: React.PropTypes.func.isRequired
}

export default LoginForm
