import React from "react";
import WatchPageVideoPlayerContainer from './watch_page_video_player_container';
import WatchPageVideoInfoContainer from './watch_page_video_info_container';
import CommentsContainer from './comments/comments_container';

export default (props) => {
  return(
    <div className="watch-video-page">
      <WatchPageVideoPlayerContainer  />
      <div className="beneath-video">
        <WatchPageVideoInfoContainer />
        <CommentsContainer />
      </div>
    </div>
  );
};
