import React from 'react'
import FormTextField from '../common/FormTextField'
import { browserHistory } from 'react-router'

export class RegisterForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: '',
      passwordConfirmation: '',
      errors: {},
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
    this.props.registerRequest(this.state).then(
      (data) => {
        this.props.addMessage({
          type: 'success',
          text: 'Registered successfully, please login'
        })
        this.setState({isLoading: false})
      },
      (error) => {
        this.props.addMessage({
          type: 'error',
          text: `Registration failed`
        })
        this.setState({errors: error.response.data, isLoading: false})
      }
    )
  }
}


RegisterForm.propTypes = {
  registerRequest : React.PropTypes.func.isRequired,
  addMessage : React.PropTypes.func.isRequired
}


export default RegisterForm
