import React from "react";
import FeedVideoListItemContainer from './feed_videos/feed_video_list_item_container';
import MyVideoListItemContainer from './my_videos/my_video_list_item_container';
import VideoPlayerContainer from '../video_player/video_player_container';

class VideoListItem extends React.Component {

  render() {
    const { video } = this.props;
    
    return(
      <li className="video-list-item">
        <aside>I am the aside</aside>
        <VideoPlayerContainer feedVideo={video} />
      </li>
    );
  }
}

export default VideoListItem;
