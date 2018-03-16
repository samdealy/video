import React from 'react';
import VideoList from '../video_list/video_list';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getUserVideos } from '../../reducers/selectors';
import { fetchMyVideos } from '../../actions/video_actions';

const mapStateToProps = state => {
  const currentUserId = state.session.currentUserId;
  const videos = getUserVideos(state, currentUserId).reverse();
  return ({ videos });
};

const mapDispatchToProps = dispatch => {
  return {
    action: () => dispatch(fetchMyVideos())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(VideoList));
