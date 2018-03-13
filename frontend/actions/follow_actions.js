import * as APIUtil from '../util/user_util';


export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW";
export const RECEIVE_FOLLOW_ERRORS  = "FOLLOW_ERRORS";

export const receiveFollow = users => {
  return({
    type: RECEIVE_FOLLOW,
    users
  });
};

export const receiveFollowErrors = errors => {
  return({
    type: RECEIVE_FOLLOW_ERRORS,
    errors
  });
};

export const follow = leaderId => dispatch => {
   return APIUtil.follower(leaderId)
    .then( users => dispatch(receiveFollow(users)))
    .fail( err   => dispatch(receiveFollowErrors(err.responseJSON)));
};

export const unfollow = leaderId => dispatch => {
   return APIUtil.unfollow(leaderId)
    .then( users => dispatch(receiveFollow(users)))
    .fail( err   => dispatch(receiveFollowErrors(err.responseJSON)));
};

export const removeFollower = followerId=> dispatch => {
   return APIUtil.removeFollower(followerId)
    .then( users => dispatch(receiveFollow(users)))
    .fail( err   => dispatch(receiveFollowErrors(err.responseJSON)));
};
