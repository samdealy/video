import { RESET_FEED_PAGE, RECEIVE_FEED_VIDEOS } from '../actions/video_actions';
import { merge } from "lodash";

export default (state = 1, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_FEED_VIDEOS:
      return state + 1;
    case RESET_FEED_PAGE:
      return 1;
    default:
      return state;
  }
};
