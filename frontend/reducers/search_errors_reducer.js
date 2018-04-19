import { RECEIVE_SEARCH_ERRORS, RECEIVE_SEARCH } from '../actions/search_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SEARCH_ERRORS:
      return action.errors || [];
    case RECEIVE_SEARCH:
      return [];
    default:
      return state;
  }
};
