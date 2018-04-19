import { combineReducers } from 'redux';
import videoIds from './search_video_reducer.js';
import userIds from './search_user_reducer.js';

export default combineReducers({
  videoIds,
  userIds
});
