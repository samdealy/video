import React from 'react';
import { connect } from 'react-redux';
import VideoStats from './video_stats';
import { withRouter } from 'react-router-dom';
import { currentVideo } from '../../reducers/selectors';


const mapStateToProps = (state, { match }) => {
  const videoId = parseInt(match.params.videoId);
  const video = currentVideo(state, videoId) || {};
  const commentIds = video.comment_ids || [];
  const numberComments = commentIds.length
  return ({
    views: video.views || 0,
    likes: "",
    numberComments
  });
};

const mapDispatchToProps = dispatch => {
  return { };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(VideoStats));
