import merge from 'lodash/merge';
import { RECEIVE_VIDEO } from '../actions/video_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_VIDEO:
      return merge({}, action.comments);
    default:
      return state;
  }
};
