import React from "react";
import { withRouter } from 'react-router-dom';
import FeedVideoListItemContainer from './feed_videos/feed_video_list_item_container';
import MyVideoListItemContainer from './my_videos/my_video_list_item_container';
import VideoListItem from './video_list_item';

class VideoList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      numberOfRequests: 1
    };
  }

  componentDidMount() {
    const { type, action } = this.props;
    if (type === "feed") {
      action(this.state.numberOfRequests);
      this.setState({ numberOfRequests: this.state.numberOfRequests + 1});
    }
  }

  createVideoListItems() {
    const { videos, type } = this.props;
    
    return videos.map( (video, i) => {
      return <VideoListItem type={type} video={video} key={i} />;
    });
  }

  render() {
    const { videos, type } = this.props;
    const videoListItems = this.createVideoListItems();
    return(
      <ul className="video-list">
        {videoListItems}
      </ul>
    );
  }
}

export default withRouter(VideoList);
