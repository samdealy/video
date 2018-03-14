import React from 'react';
import VideoList from '../video_list';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getUserVideos } from '../../../reducers/selectors';
import { fetchUsersVideos } from '../../../actions/video_actions';

const mapStateToProps = state => { 
  const videos = getFeedVideos(state) || [];
  return ({
    type: "feed",
    videos
  });
};

const mapDispatchToProps = dispatch => {
  return { 
    action: (requestCounter) => dispatch(fetchFeedVideos(requestCounter))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(VideoList));