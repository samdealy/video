import merge from 'lodash/merge';
import { RECEIVE_USER, REMOVE_CURRENT_USER } from '../actions/session_actions';

const _nullUser = Object.freeze({
  currentUser: null
});

export default (state = _nullUser, action) => {

  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USER:
      const currentUser = action.userBundle.currentUser;
      return merge({}, { currentUser });
    case REMOVE_CURRENT_USER:
      return {currentUser: null}
    default:
      return state;
  }
};
