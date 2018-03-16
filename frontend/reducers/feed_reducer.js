import { combineReducers } from 'redux';
import nextFeedPage from "./next_feed_page_reducer";
import numberOfFeedVideos from "./number_of_feed_videos_reducer";

export default combineReducers({
  nextFeedPage,
  numberOfFeedVideos
});
