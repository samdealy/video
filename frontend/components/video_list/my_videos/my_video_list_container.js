import React from 'react';
import VideoList from '../video_list';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getUser, getCurrentUser } from '../../../reducers/selectors';

const mapStateToProps = state => {

  return ({
    type: "MY VIDEO"
  });
};

const mapDispatchToProps = dispatch => {
  return { };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(VideoList));
