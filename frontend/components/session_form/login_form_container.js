import React from 'react';
import { connect } from 'react-redux';
import SessionForm  from './session_form';
import { login } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors.session,
    formHeader: 'Log in to',
    linkTitle: "Don't have an account?",
    linkText: "Join",
    linkPath: "join",
    nameClass: "hidden",
    src: "https://s3.amazonaws.com/fsp-video-dev/northern_lights+2.mp4"
  };
};

const dispatchStateToProps = (dispatch) => {
  return { processForm: (user) => dispatch(login(user)) };
};

export default connect(mapStateToProps, dispatchStateToProps)(SessionForm);

//NOTE CSS: nameClass is now going to hide the First and last
//name input depending on login or join. CSS
