export const follow = leader_id => {
  return $.ajax({
    method: 'POST',
    url: '/api/followings',
    data: { leader_id }
  });
};

export const unfollow = leaderId => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/followings/${leaderId}`,
    data: { unfollow: true }
  });
};

export const removeFollower= followerId => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/followings/${followerId}`,
  });
};
