import { combineReducers } from 'redux';
import users from './users_reducer';
import videos from './videos_reducer';

export default combineReducers({
  users,
  videos
});
