import React from 'react';
import { connect } from 'react-redux';
import HomePage from './home_page';
import { getCurrentUser } from '../../reducers/selectors';

const mapStateToProps = (state) => {
  const currentUser = getCurrentUser(state) || {};
  const userName    = currentUser.username  || '';
  return { userName };
};

export default connect(mapStateToProps, null)(HomePage);
