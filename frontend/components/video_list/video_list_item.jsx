import React from "react";
import FeedVideoListItemContainer from './feed_videos/feed_video_list_item_container';
import MyVideoListItemContainer from './my_videos/my_video_list_item_container';
import VideoPlayerContainer from '../watch/video_player/video_player_container';

class VideoListItem extends React.Component {

  feedListItemVideo() {
    const { video } = this.props;
    return(
      <div>
        <VideoPlayerContainer video={video} />
      </div>
    );
  }

  render() {
    const { video } = this.props;
    return(
      <li className="video-list-item">

      </li>
    );
  }
}
