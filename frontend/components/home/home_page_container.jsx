import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import HomePage from './home_page';
import { getCurrentUser } from '../../reducers/selectors';



const mapStateToProps = state => {
  const currentUser = getCurrentUser(state) || {};
  const userName    = currentUser.username  || '';
  return { userName };
};

export default withRouter(connect(mapStateToProps, null)(HomePage));
