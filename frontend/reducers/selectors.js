export const getCurrentUser = state => {
  return state.entities.users[state.session.currentUserId];
};

export const currentVideo = (state, videoId) => {
  return state.entities.videos[videoId];
};
