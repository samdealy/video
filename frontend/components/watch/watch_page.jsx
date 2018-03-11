import React from "react";
import VideoPlayerContainer from './video_player/video_player_container';
import VideoInfoContainer from './video_info/video_info_container';

export default (props) => {
  return(
    <div className="watch-video-page">
      <VideoPlayerContainer />
      <div className="beneath-video">
        <VideoInfoContainer />
      </div>
    </div>
  );
};
