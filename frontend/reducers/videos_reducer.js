import { RECEIVE_VIDEO, RECEIVE_MY_VIDEOS, RECEIVE_FEED_VIDEOS } from '../actions/video_actions';
import { merge } from "lodash";

export default (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_VIDEO:
      return merge({}, {[action.video.id]: action.video});
    case RECEIVE_MY_VIDEOS:
      return merge({}, state, action.videos);
    case RECEIVE_FEED_VIDEOS:
      return merge({}, state, action.videos);
    default:
      return state;
  }
};
