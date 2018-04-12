import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getUserVideos } from '../../reducers/selectors';
import { fetchProfileVideos } from '../../actions/video_actions'
import ProfileHeader from './profile';


const msp = (state, ownProps) => {
  const userId = ownProps.match.params.userId;
  const videos = getUserVideos(state, userId);
  const match  = ownProps.match;
  const action = () => {};

  return({ userId, videos, match, action });
}

const mdp = dispatch => {
  return({
    fetchProfileVideos: userId => dispatch(fetchProfileVideos(userId))
  });
}

export default withRouter(connect(msp, mdp)(ProfileHeader));
