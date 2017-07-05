import React from 'react'
import FormTextField from '../common/FormTextField'
import { browserHistory } from 'react-router'
import axios from 'axios'

export class RegisterForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: '',
      passwordConfirmation: '',
      errors: {},
      success: '',
      isLoading: false
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }
  render(){
    const { errors, email, password, passwordConfirmation, isLoading, success } = this.state

    return (
    <form onSubmit={this.onSubmit.bind(this)}>

      <h2>Register</h2>
      { success && <div className="alert alert-success">{success}</div> }

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

       <FormTextField
        field="passwordConfirmation"
        label="Password Confirmation"
        value={passwordConfirmation}
        error={errors.passwordConfirmation}
        onChange={this.onChange}
        type="password"
      />

      <div className="form-group">
        <button className="btn btn-primary" disabled={this.state.isLoading}>
          Register
        </button>
      </div>
    </form>
    )
  }

  onChange(e){
    this.setState({[e.target.name]: e.target.value})
  }

  onSubmit(e){
    this.setState({ errors: {} , isLoading: true})
    e.preventDefault()
    axios.post('/api/users', {user: this.state}).then(
      (data) => {
         this.setState({success: data.data.success, isLoading: false})
      },
      (error) =>   this.setState({errors: error.response.data, isLoading: false})
    )
  }
}


export default RegisterForm
