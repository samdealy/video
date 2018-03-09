import React from 'react';
import { connect } from 'react-redux';
import UploadVideoInput from './upload_video_input';
import { createVideo } from '../../actions/video_actions';

const mapStateToProps = (state) => {
  return ({})
};

const mapDispatchToProps = dispatch => {
  return {
    createVideo: video => dispatch(createVideo(video))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UploadVideoInput);
