export const createFollowing = (followerId, leaderId)=> {
  return $.ajax({
    method: 'POST',
    url: '/api/followings',
    data: { following:
      {follower_id: followerId, leader_id: leaderId}
    }
  });
};

export const deleteFollowing
