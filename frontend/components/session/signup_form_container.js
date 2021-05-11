
import React from 'react';
import {connect} from 'react-redux';
import { demoLogin, removeErrors, signup } from '../../actions/session_actions';

import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => {

  return {
    errors: state.errors,
    formType: "Signup"
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    processForm: (user) => dispatch(signup(user)),
    removeErrors: () => dispatch(removeErrors()),
    demoLogin: () => dispatch(demoLogin())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);