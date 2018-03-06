import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { join } from '../../actions/session_actions';
import WelcomePage from './welcome_page';

const mapStateToProps = ({ errors }) => {
  return { };
};

const mapDispatchToProps = dispatch => {
  return { };
};

export default connect(mapStateToProps, mapDispatchToProps)(WelcomePage);
