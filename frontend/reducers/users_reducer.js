import merge from 'lodash/merge';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_VIDEO } from '../actions/video_actions';

const _nullUsers = Object.freeze({
  users: {}
});

export default (state = _nullUsers, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const newUser = action.user;
      return merge({}, { [newUser.id]: newUser });
    case RECEIVE_VIDEO:
      return merge({}, state, action.users);
    default:
      return state;
  }
};
