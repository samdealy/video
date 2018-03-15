import React from "react";
// import VideoPlayerContainer from '../video_player/video_player_container';
import VideoListPlayerContainer from './video_list_player_container';
import VideoListItemInfoContainer from './video_list_item_info/video_list_item_info_container';

class VideoListItem extends React.Component {

  render() {
    const { video, type } = this.props;
    return(
      <li className="video-list-item">
        <aside>I am the aside</aside>
        <div className="video-player-video-info">
          <VideoListPlayerContainer   type={type} video={video} />
          <VideoListItemInfoContainer type={type} video={video} />
        </div>
      </li>
    );
  }
}

export default VideoListItem;
