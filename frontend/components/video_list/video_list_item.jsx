import React from "react";
import FeedVideoListItemContainer from './feed_videos/feed_video_list_item_container';
import MyVideoListItemContainer from './my_videos/my_video_list_item_container';


class VideoListItem extends React.Component {

  render() {

    return(
      <ul className="video-list">
        {videoListItems}
      </ul>
    );
  }
}
