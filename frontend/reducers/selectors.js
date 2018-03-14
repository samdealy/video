export const getCurrentUser = state => {
  return state.entities.users[state.session.currentUserId];
};

export const getUser = (state, userId) => {
  return state.entities.users[userId];
};

export const currentVideo = (state, videoId) => {
  return state.entities.videos[videoId];
};

export const getFeedVideos = state => {
  currentUser = getCurrentUser(state);
  feedVideoIds = currentUser.feed_video_ids;
  return feedVideoIds.map( videoId => state.entities.videos[videoId]);
};

export const getComments = (state, commentIds) => {
  return commentIds.map( id => state.entities.comments[id]);
};

export const getComment = (state, commentId) => {
  return state.entities.comments[commentId];
};
