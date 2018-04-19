import { combineReducers } from 'redux';
import videos from './search_video_reducer.js';
import users from './search_user_reducer.js';

export default combineReducers({
  videos,
  users
});
