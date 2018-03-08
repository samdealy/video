import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { join } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formHeader: 'Join',
    linkTitle: "Already have an account?",
    linkText: "Log in",
    linkPath: "log_in",
    nameClass: "login-input"
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(join(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);

//NOTE
// I'll have to create two new routes to redirect to a new page that has address:
// "/join" and '/log_in'
