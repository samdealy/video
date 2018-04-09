import merge from 'lodash/merge';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_VIDEO, RECEIVE_MY_VIDEOS, RECEIVE_FEED_VIDEOS, RECEIVE_PROFILE_VIDEOS } from '../actions/video_actions';
import { RECEIVE_FOLLOW } from '../actions/follow_actions';

const _nullUsers = Object.freeze({
  users: {}
});

export default (state = _nullUsers, action) => {
  Object.freeze(state);
  let newUsers, newUser;
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      newUser = action.user;
      return merge({}, { [newUser.id]: newUser });
    case RECEIVE_VIDEO:
      return merge({}, state, action.users);
    case RECEIVE_MY_VIDEOS:
      newUsers = action.users || {};
      return merge({}, state, newUsers);
    case RECEIVE_PROFILE_VIDEOS:
      newUser = action.user || {};
      return merge({}, state, newUser);
    case RECEIVE_FEED_VIDEOS:
      newUsers = action.users || {};
      return newUsers;
    case RECEIVE_FOLLOW:
      return Object.assign({}, state, action.users);
    default:
      return state;
  }
};
