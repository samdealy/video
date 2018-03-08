import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect, Route } from 'react-router-dom';

const Auth = ({component: Component, path, loggedIn, exact}) => {

  return(
  <Route path={path} exact={exact} render={(props) => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/home" />
    )
  )}/>
  )
};

const mapStateToProps = state => {
  return {loggedIn: Boolean(state.session.currentUserId)};
};

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
