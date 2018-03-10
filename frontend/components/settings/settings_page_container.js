import React from 'react';
import { connect } from 'react-redux';
import SettingsPage from './settings_page';
import { currentVideo } from '../../reducers/selectors';
import { fetchVideo, editVideo } from '../../actions/video_actions';

const mapStateToProps = (state, { match }) => {
  const videoId = parseInt(match.params.videoId);
  const video = currentVideo(state, videoId) || {};
  return ({
    videoId,
    videoTitle: video.title || '',
    videoDescription: video.description || '',
    videoTimeStamp: video.timestamp || '',
    videoThumbUrl: video.thumb_url || '',
    videoUploaderId: video.uploader_id || null,
    currentUserId: state.session.currentUserId
  });
};

const mapDispatchToProps = dispatch => {
  return { 
    fetchVideo: videoId => dispatch(fetchVideo(videoId)),
    editVideo:  video => dispatch(editVideo(video))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage);
