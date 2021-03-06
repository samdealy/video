import React from 'react';
import { connect } from 'react-redux';
import VideoPlayer from '../video_player/video_player';
import { withRouter } from 'react-router-dom';
import { currentVideo } from '../../reducers/selectors';
import { fetchVideo, increaseViews } from '../../actions/video_actions';

const mapStateToProps = (state, { match }) => {
  const videoId = parseInt(match.params.videoId);
  const video   = currentVideo(state, videoId) || {};
  
  return ({
    videoId,
    type: "watch-player",
    videoThumbUrl: video.thumb_url || '',
    videoClipUrl: video.clip_url || '',
    clipType: video.clip_content_type || ''
  });
};

const mapDispatchToProps = dispatch => {
  return {
    fetchVideo: videoId => dispatch(fetchVideo(videoId)), 
    increaseViews:  videoId => dispatch(increaseViews(videoId))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(VideoPlayer));
