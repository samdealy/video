import React from 'react';
import { connect } from 'react-redux';
import SettingsPage from './settings_page';
import { currentVideo } from '../../reducers/selectors';
import { fetchVideo } from '../../actions/video_actions'
const mapStateToProps = (state, ownProps) => {
  
  const videoId = ownProps.match.params.videoId;
  return ({
    video: currentVideo(state, videoId)
  });
};

const mapDispatchToProps = dispatch => {
  return { };
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage);
