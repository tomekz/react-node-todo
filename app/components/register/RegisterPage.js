import React from 'react';
import RegisterForm from './RegisterForm';

class RegisterPage extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
            <RegisterForm/>
        </div>
      </div>
    );
  }
}

export default RegisterPage;
