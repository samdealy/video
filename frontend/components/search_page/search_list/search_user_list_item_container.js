import React from "react";
import { connect } from 'react-redux';
import SearchUserListItem from './search_user_list_item';
import { getUser } from '../../../reducers/selectors';
import { withRouter } from 'react-router-dom';

const msp = (state, { user }) => {
  user = user || {};
  const userId = user.id || "";
  const userName = user.username || "";
  const iconUrl = user.image_url || "";

  const numberOfFollowers = Object.keys(user.follower_ids).length || 0;
  const videoIds = user.video_ids || [];
  const numberOfVideos = videoIds.length || 0;

  return ({ userId, userName, numberOfFollowers, numberOfVideos, iconUrl })
}

export default connect(msp, null)(SearchUserListItem);
