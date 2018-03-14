import React from "react";
import FeedVideoListItemContainer from './feed_videos/feed_video_list_item_container';
import MyVideoListItemContainer from './my_videos/my_video_list_item_container';


class VideoList extends React.Component {

  createVideoListItems() {
    const { videos, type } = this.props;
    return videos.map( (video, i) => {
      if (type === "feed") {
        return <FeedVideoListItemContainer video={video} key={i} />;
      } else {
        return <MyVideoListItemContainer video={video} key={i} />;
      }
    });
  }


  render() {
    const { videos, type } = this.props;
    videoListItems = this.createVideoListItems();

    return(
      <ul className="video-list">
        {videoListItems}
      </ul>
    );
  }
}

export default withRouter(VideoList);
