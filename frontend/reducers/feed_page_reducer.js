import { INCREMENT_FEED_PAGE, RESET_FEED_PAGE } from '../actions/feed_actions';
import { merge } from "lodash";

export default (state = 1, action) => {
  Object.freeze(state);
  switch(action.type) {
    case INCREMENT_FEED_PAGE:
      return state + 1;
    case RESET_FEED_PAGE:
      return 1;
    default:
      return state;
  }
};
