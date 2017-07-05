import React from 'react'
import axios from 'axios'

export class RegisterForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }
  render(){
    return (
    <form onSubmit={this.onSubmit.bind(this)}>
      <div className="form-group">
        <label className="control-label">Email</label>
        <input
         value={this.state.email}
         onChange={this.onChange.bind(this)}
         type="text" name="email" className="form-control"/>
      </div>
       <div className="form-group">
        <label  className="control-label">Password</label>
        <input
         value={this.state.password}
         onChange={this.onChange.bind(this)}
         type="password" name="password" className="form-control"/>
      </div>
      <div className="form-group">
        <button className="btn btn-primary">
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
    e.preventDefault()


  }
}


export default RegisterForm
