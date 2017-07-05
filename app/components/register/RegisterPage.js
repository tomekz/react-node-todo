import React from 'react';
import RegisterForm from './RegisterForm';
// import { connect } from 'react-redux';
// import { userSignupRequest, isUserExists } from '../../actions/signupActions';
// import { addFlashMessage } from '../../actions/flashMessages.js';

class RegisterPage extends React.Component {
  render() {
    // const { userSignupRequest, addFlashMessage, isUserExists } = this.props;
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
            <RegisterForm/>
          {/*<SignupForm
            isUserExists={isUserExists}
            userSignupRequest={userSignupRequest}
            addFlashMessage={addFlashMessage} />*/}
        </div>
      </div>
    );
  }
}

// SignupPage.propTypes = {
//   userSignupRequest: React.PropTypes.func.isRequired,
//   addFlashMessage: React.PropTypes.func.isRequired,
//   isUserExists: React.PropTypes.func.isRequired
// }


export default RegisterPage;
