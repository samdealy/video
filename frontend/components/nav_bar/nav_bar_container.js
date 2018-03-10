import { connect } from 'react-redux';
import React from 'react';
import { join } from '../../actions/session_actions';
import NavBar from './nav_bar';
import { getCurrentUser } from '../../reducers/selectors.js';
import { logout } from '../../actions/session_actions';

const mapStateToProps =  state => {
  const loggedIn = Boolean(state.session.currentUserId);
  const currentUser = loggedIn ? getCurrentUser(state) : {};
  return {
    loggedIn, 
    currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
