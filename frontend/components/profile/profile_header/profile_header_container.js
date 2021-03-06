import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getUser, getUserVideos } from '../../../reducers/selectors';
import { fetchProfileVideos } from '../../../actions/video_actions'
import ProfileHeader from './profile_header.jsx';

const msp = (state, ownProps) => {
  const userId = ownProps.match.params.userId;
  const user   = getUser(state, userId) || {};
  const followerIds = user.follower_ids || [];
  const videos = getUserVideos(state, userId);

  return({
    userId,
    userName: user.username || '',
    userImage: user.image_url || '',
    videoCount: videos.length || '',
    followerCount: Object.keys(followerIds).length || 0,
    videos
  });
}

export default withRouter(connect(msp, null)(ProfileHeader));
