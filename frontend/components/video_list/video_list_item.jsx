import React from "react";
// import VideoPlayerContainer from '../video_player/video_player_container';
import VideoListPlayerContainer from './video_list_player_container';

class VideoListItem extends React.Component {

  render() {
    const { video, type } = this.props;
    return(
      <li className="video-list-item">
        <aside>I am the aside</aside>
        <VideoListPlayerContainer type={type} video={video} />
      </li>
    );
  }
}

export default VideoListItem;
