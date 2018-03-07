export const getCurrentUser = state => {
  
  return state.entities.users[state.session.currentUserId];
};
