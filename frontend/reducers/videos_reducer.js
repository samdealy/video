import { RECEIVE_VIDEO,
        RECEIVE_MY_VIDEOS,
        RECEIVE_FEED_VIDEOS,
        RECEIVE_PROFILE_VIDEOS,
        CLEAR_VIDEOS } from '../actions/video_actions';
import { merge } from "lodash";

export default (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_VIDEO:
      return Object.assign({}, state, {[action.video.id]: action.video});
    case CLEAR_VIDEOS:
      return {};
    case RECEIVE_MY_VIDEOS:
      return action.videos || {};
    case RECEIVE_FEED_VIDEOS:
      // const newState = Object.assign({}, state);
      // action.videos.forEach( vid =>{
      //   newState[vid.id] = vid;
      // });
      return merge({}, state, action.videos) || {};
    case RECEIVE_PROFILE_VIDEOS:
      return action.videos || {};
    default:
      return state;
  }
};
