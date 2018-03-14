import React from "react";
import UploadButton from '../buttons/upload_button';
import FeedLinkBar from './feed_link_bar'
import FeedVideosContainer from './feed_videos/feed_videos_container';

export default ({ userName }) => {
  return(
    <div className="home-page-container">
      <h1 className="page-header">Welcome home, {userName}</h1>
      <div className="home-page-content">
        <div className="feed-nav-feed-videos">
          <FeedLinkBar />
          <FeedVideosContainer />
        </div>
        <aside className="feed-aside">
          <UploadButton text={"Upload a video"} />
          <div> About me </div>
        </aside>
      </div>
    </div>
  );
};
