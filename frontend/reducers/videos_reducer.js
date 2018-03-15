import { RECEIVE_VIDEO, RECEIVE_VIDEOS } from '../actions/video_actions';
import { merge } from "lodash";

export default (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_VIDEO:
      return merge({}, state, {[action.video.id]: action.video});
    case RECEIVE_VIDEOS:
      debugger
      return merge({}, state, action.videos);
    default:
      return state;
  }
};
