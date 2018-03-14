import React from "react";
import { Link } from "react-router-dom";
import UploadButton from '../buttons/upload_button';

export default ({ userName }) => {
  return(
    <div className="home-page-container">
      <h1 className="page-header">Welcome home, {userName}</h1>
      <div className="home-page-content">
        <div className="feed-nav-feed-videos">
          <div className="feed-link-bar">
            <div className="tabs"></div>
            <Link to='/home'>My Feed</Link>
            <Link to='/myvideos'>My Videos</Link>
          </div>
        </div>
        <aside className="feed-aside">
          <UploadButton text={"Upload a video"} />
          <div> About me </div>
        </aside>
      </div>
    </div>
  );
};
