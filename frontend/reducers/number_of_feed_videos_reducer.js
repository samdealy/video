import {  RECEIVE_FEED_VIDEOS } from '../actions/video_actions';

export default (state = 0, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_FEED_VIDEOS:
      return action.numberOfFeedVideos;
    default:
      return state;
  }
};
