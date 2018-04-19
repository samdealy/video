export const getCurrentUser = state => {
  return state.entities.users[state.session.currentUserId];
};

export const getUser = (state, userId) => {
  return state.entities.users[userId];
};

export const currentVideo = (state, videoId) => {
  return state.entities.videos[videoId];
};

export const getSearchVideos = state => {
  const searchVideoIds =   state.ui.search.videoIds || [];
  return searchVideoIds.map( videoId => state.entities.videos[videoId] );
}

export const getSearchUsers = state => {
  const getSearchUsers = state.ui.search.userIds || [];
  return getSearchUsers.map( userId => state.entities.users[userId] )
}

export const getFeedVideos = state => {
  const feedVideoIds = state.ui.feed.feedVideoIds || [];
  return feedVideoIds.map( videoId => state.entities.videos[videoId]);
};

export const getUserVideos = (state, userId) => {
  const user = state.entities.users[userId] || {video_ids: []};
  return user.video_ids.map( id => state.entities.videos[id])
    .filter(video => video !== undefined);
};

export const getComments = (state, commentIds) => {
  return commentIds.map( id => state.entities.comments[id]);
};

export const getComment = (state, commentId) => {
  return state.entities.comments[commentId];
};
