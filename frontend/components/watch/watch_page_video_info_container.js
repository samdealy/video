import React from 'react';
import { connect } from 'react-redux';
import WatchPageVideoInfo from '../video_info/watch_page_video_info';
import { withRouter } from 'react-router-dom';
import { currentVideo, getUser, getCurrentUser } from '../../reducers/selectors';


const mapStateToProps = (state, { match }) => {
  const videoId = parseInt(match.params.videoId);
  const video = currentVideo(state, videoId) || {};
  const user = getUser(state, video.uploader_id) || {};
  const currentUser = getCurrentUser(state);
  
  const followPresent = video.uploader_id !== currentUser.id ? true : false;
  
  return ({
    className: 'player-video-info',
    videoTitle: video.title || '',
    videoDescription: video.description || '',
    viewCount: video.views || '',
    videoTimeStamp: video.timestamp || '',
    iconUrl: user.image_url || '',
    userName: user.username || '',
    uploaderId: video.uploader_id || '',
    followPresent, 
    statsPresent: true
  });
};

const mapDispatchToProps = dispatch => {
  return { };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(WatchPageVideoInfo));
