import { connect } from 'react-redux';
import React from 'react';
import { join } from '../../actions/session_actions';
import NavBar from './nav_bar';


const mapStateToProps =  state => {
  return {
    loggedIn: Boolean(state.session.currentUser)
  };
};

const mapDispatchToProps = dispatch => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
