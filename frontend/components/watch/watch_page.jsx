import React from "react";
import VideoPlayerContainer from './video_player/video_player_container';
import PlayerVideoInfoContainer from '../video_info/player_video_info_container';
import CommentsContainer from './comments/comments_container';

export default (props) => {
  return(
    <div className="watch-video-page">
      <VideoPlayerContainer />
      <div className="beneath-video">
        <PlayerVideoInfoContainer />
        <CommentsContainer />
      </div>
    </div>
  );
};
