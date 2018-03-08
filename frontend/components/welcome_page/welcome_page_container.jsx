import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { join } from '../../actions/session_actions';
import WelcomePage from './welcome_page';

const mapStateToProps = ({ errors }) => {
  return { src: "https://s3.amazonaws.com/fsp-video-dev/northern_lights+2.mp4" };
};

const mapDispatchToProps = dispatch => {
  return { };
};

export default connect(mapStateToProps, mapDispatchToProps)(WelcomePage);
