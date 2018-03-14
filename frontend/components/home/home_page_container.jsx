import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import HomePage from './home_page';
import { getCurrentUser } from '../../reducers/selectors';
import FeedVideoListContainer from '../video_list/feed_videos/feed_video_list_container';
import MyVideoListContainer from '../video_list/my_videos/my_video_list_container';


const mapStateToProps = (state, { match }) => {
  const currentUser = getCurrentUser(state) || {};
  const userName    = currentUser.username  || '';
  const VideoListContainer = match.path === '/home' ?
    <FeedVideoListContainer /> : <MyVideoListContainer />;
  return { userName, VideoListContainer };
};

export default withRouter(connect(mapStateToProps, null)(HomePage));
