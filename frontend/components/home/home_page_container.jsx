import React from 'react';
import { connect } from 'react-redux';
import HomePage from './home_page';
import { getCurrentUser } from '../../reducers/selectors';
import FeedVideoListContainer from './feed_videos/feed_video_list_container';
import MyVideoListContainer from './my_videos/my_video_list_container';


const mapStateToProps = (state, { match }) => {
  const currentUser = getCurrentUser(state) || {};
  const userName    = currentUser.username  || '';
  const ListContainer = match.path === '/home' ? 
    <FeedVideoListContainer /> : <MyVideoListContainer />;
  return { userName, ListContainer };
};

export default withRouter(connect(mapStateToProps, null)(HomePage));
