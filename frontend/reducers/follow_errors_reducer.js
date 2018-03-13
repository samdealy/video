import { RECEIVE_FOLLOW_ERRORS, RECEIVE_FOLLOW } from "../actions/follow_actions";

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_FOLLOW_ERRORS:
      return action.errors || [];
    case RECEIVE_FOLLOW:
      return [];
    default:
      return state;
  }
};
