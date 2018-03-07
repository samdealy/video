import merge from 'lodash/merge';
import { RECEIVE_USER } from '../actions/session_actions';

const _nullUsers = Object.freeze({
  users: {}
});

export default (state = _nullUsers, action) => {
  debugger
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USER:
      const newUser = action.userBundle.user;
      return merge({}, { [newUser.id]: newUser });
    default:
      return state;
  }
};
