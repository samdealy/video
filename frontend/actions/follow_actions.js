import * as APIUtil from '../util/follow_util';


export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW";
export const RECEIVE_FOLLOW_ERRORS  = "FOLLOW_ERRORS";

export const receiveFollow = payload => {
  return({
    type: RECEIVE_FOLLOW,
    users: payload.users
  });
};

export const receiveFollowErrors = errors => {
  return({
    type: RECEIVE_FOLLOW_ERRORS,
    errors
  });
};

export const follow = leaderId => dispatch => {
   return APIUtil.follow(leaderId)
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
