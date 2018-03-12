import React from 'react';
import { connect } from 'react-redux';
import VideoStats from './video_stats';
import { withRouter } from 'react-router-dom';
import { currentVideo } from '../../reducers/selectors';


const mapStateToProps = (state, { match }) => {
  const videoId = parseInt(match.params.videoId);
  const video = currentVideo(state, videoId) || {};
  return ({
    plays: video.plays || "",
    likes: "",
    comments: ""
  });
};

const mapDispatchToProps = dispatch => {
  return { };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(VideoStats));
