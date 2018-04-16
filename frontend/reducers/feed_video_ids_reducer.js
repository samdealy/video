import { RESET_FEED_PAGE, RECEIVE_FEED_VIDEOS } from '../actions/video_actions';
import { merge } from "lodash";

export default (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_FEED_VIDEOS:
      const newState = state.slice();
      return newState.concat(action.feedVideoIds);
    case RESET_FEED_PAGE:
      return [];
    default:
      return state;
  }
};
