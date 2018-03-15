import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import VideoPlayer from '../../video_player/video_player';

const mapStateToProps = (state, { video }) => {
  const feedVideo = video || {};

  return ({
    videoId: feedVideo.id,
    videoThumbUrl: feedVideo.thumb_url || '',
    videoClipUrl: feedVideo.clip_url || '',
    clipType: feedVideo.clip_content_type || ''
  });
};

const mapDispatchToProps = dispatch => {
  return {
    increaseViews:  videoId => dispatch(increaseViews(videoId))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(VideoPlayer));
