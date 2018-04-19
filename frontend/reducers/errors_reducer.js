import { combineReducers } from 'redux';
import session from './session_errors_reducer';
import video from './videos_errors_reducer';
import follow from './follow_errors_reducer';
import search from './search_errors_reducer';

export default combineReducers({
  session,
  video,
  follow,
  search
});
