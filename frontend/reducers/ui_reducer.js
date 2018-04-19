import { combineReducers } from 'redux';
import feed from './feed_reducer';
import search from './search_reducer';

export default combineReducers({
  feed,
  search
});
