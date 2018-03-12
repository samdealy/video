import React from 'react';
import { connect } from 'react-redux';
import FollowButton from './follow_button'
import { withRouter } from 'react-router-dom';
import { getUser } from '../../reducers/selectors';


const mapStateToProps = (state, { match }) => {
  // const videoId = parseInt(match.params.videoId);
  // const user = getUser(state, video.uploader_id) || {};

  return ({
  });
};

const mapDispatchToProps = dispatch => {
  return { };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FollowButton));
