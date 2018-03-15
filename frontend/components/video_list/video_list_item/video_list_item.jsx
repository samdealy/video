import React from "react";
// import VideoPlayerContainer from '../video_player/video_player_container';
import VideoListPlayerContainer from './video_list_player_container';
import VideoListItemInfoContainer from './video_list_item_info/video_list_item_info_container';
import VideoListItemAsideContainer from './video_list_item_aside/video_list_item_aside_container';

class VideoListItem extends React.Component {

  render() {
    const { video } = this.props;
    return(
      <li className="video-list-item">
        <VideoListItemAsideContainer video={video} />
        <div className="video-player-video-info">
          <VideoListPlayerContainer   video={video} />
          <VideoListItemInfoContainer video={video} />
        </div>
      </li>
    );
  }
}

export default VideoListItem;
