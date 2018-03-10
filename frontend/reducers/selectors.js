export const getCurrentUser = state => {
  return state.entities.users[state.session.currentUserId];
};

export const getUser = (state, userId) => {
  return state.entities.users[userId];
};

export const currentVideo = (state, videoId) => {
  return state.entities.videos[videoId];
};
