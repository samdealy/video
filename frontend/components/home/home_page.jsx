import React from "react";
import { withRouter } from "react-router-dom";
import UploadButton from '../buttons/upload_button';
import FeedLinkBar from './feed_link_bar';
import FeedVideoListContainer from './feed_video_list_container';
import MyVideoListContainer from './my_video_list_container';



class HomePage extends React.Component {

  videoListContainer() {
    const { match } = this.props;
    return match.path === "/home" ?
      <FeedVideoListContainer /> : <MyVideoListContainer />;
  }

  render() {
    const { userName } = this.props;
    return(
      <div className="home-page-container">
        <h1 className="page-header">Welcome home, {userName}</h1>
        <div className="home-page-content">
          <div className="feed-nav-feed-videos">
            <FeedLinkBar />
            {this.videoListContainer()}
          </div>
          <aside className="feed-aside">
            <UploadButton text={"Upload a video"} />
            <div> About me </div>
          </aside>
        </div>
      </div>
    );
  }
}

export default withRouter(HomePage);
