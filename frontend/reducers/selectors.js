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
  const currentUser = getCurrentUser(state);
  const feedVideoIds = currentUser.feed_video_ids || [];
  return feedVideoIds.map( videoId => state.entities.videos[videoId]);
};

export const getUserVideos = (state, userId) => {
  const user = state.entities.users[userId];
  return user.video_ids.map( id => state.entities.videos[id])
    .filter(video => video !== undefined);
};

export const getComments = (state, commentIds) => {
  return commentIds.map( id => state.entities.comments[id]);
};

export const getComment = (state, commentId) => {
  return state.entities.comments[commentId];
};
