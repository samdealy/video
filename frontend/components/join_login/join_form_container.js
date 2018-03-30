import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { join, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session || [],
    formHeader: 'Join',
    linkTitle: "Already have an account?",
    linkText: "Log in",
    linkPath: "log_in",
    nameClass: "login-input",
    src: "https://s3.amazonaws.com/fsp-video-dev/glacier.mp4",
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(join(user)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
