import React from 'react';
import VideoList from '../video_list/video_list';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getFeedVideos } from '../../reducers/selectors';
import { fetchFeedVideos, resetFeedPage } from '../../actions/video_actions';

const mapStateToProps = state => {
  const videos = getFeedVideos(state) || [];

  const pageNumber = state.ui.feedPage;
  return ({ pageNumber, videos });
};

const mapDispatchToProps = dispatch => {
  return {
    action: (requestCounter) => dispatch(fetchFeedVideos(requestCounter)),
    resetFeedPage: () => dispatch(resetFeedPage()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(VideoList));
