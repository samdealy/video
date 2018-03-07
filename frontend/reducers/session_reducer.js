import merge from 'lodash/merge';
import { RECEIVE_CURRENT_USER, REMOVE_CURRENT_USER } from '../actions/session_actions';

const _nullUser = Object.freeze({
  currentUserId: null
});

export default (state = _nullUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const { id } = action.user;
      const currentUserId = id;
      return merge({}, { currentUserId });
    case REMOVE_CURRENT_USER:
      return { currentUserId: null };
    default:
      return state;
  }
};
