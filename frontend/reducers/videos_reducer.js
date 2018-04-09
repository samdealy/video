import { RECEIVE_VIDEO, RECEIVE_MY_VIDEOS,
  RECEIVE_FEED_VIDEOS, RECEIVE_PROFILE_VIDEOS } from '../actions/video_actions';
import { merge } from "lodash";

export default (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_VIDEO:
      return Object.assign({}, state, {[action.video.id]: action.video});
    case RECEIVE_MY_VIDEOS:
      return action.videos || {};
    case RECEIVE_FEED_VIDEOS:
      return action.videos || {};
    case RECEIVE_PROFILE_VIDEOS:
      return action.videos || {};
    default:
      return state;
  }
};
