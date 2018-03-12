import React from 'react';
import { connect } from 'react-redux';
import VideoInfo from './video_info';
import { withRouter } from 'react-router-dom';
import { currentVideo, getUser } from '../../reducers/selectors';
// import { fetchVideo } from '../../../actions/video_actions';

const mapStateToProps = (state, { match }) => {
  const videoId = parseInt(match.params.videoId);
  const video = currentVideo(state, videoId) || {};
  const user = getUser(state, video.uploader_id) || {};
  return ({
    className: 'player-video-info',
    videoTitle: video.title || '',
    videoDescription: video.description || '',
    viewCount: video.views || '',
    videoTimeStamp: video.timestamp || '',
    iconUrl: user.image_url || '',
    userName: user.username || '',
    followPresent: true, 
    statsPresent: true
  });
};

const mapDispatchToProps = dispatch => {
  return { };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(VideoInfo));
