import React from 'react';
import { connect } from 'react-redux';
import SessionForm  from './session_form';
import { login, clearErrors } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors.session || [],
    formHeader: 'Log in to',
    linkTitle: "Don't have an account?",
    linkText: "Join",
    linkPath: "join",
    nameClass: "hidden",
    src: "https://s3.amazonaws.com/fsp-video-dev/desert_video.mp4",
  };
};

const dispatchStateToProps = (dispatch) => {
  return {
    processForm: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapStateToProps, dispatchStateToProps)(SessionForm);
