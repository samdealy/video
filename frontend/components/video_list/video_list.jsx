import React from "react";
import { withRouter } from 'react-router-dom';
import VideoListItem from './video_list_item/video_list_item';

class VideoList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      numberOfRequests: 1,
      noMoreVideosText: false
    };
    this.handleLoadMore = this.handleLoadMore.bind(this);
  }

  componentDidMount() {
    const { type, action } = this.props;
    if (type === "feed") {
      this.handleLoadMore();
    } else {
      action();
    }
  }

  componentWillReceiveProps(nextProps) {
    const { type, videos }  = this.props;
    const newNumberOfVideos = nextProps.videos.length;
    const oldNumberOfVideos = videos.length;

    if ((oldNumberOfVideos === newNumberOfVideos)  && (type === "feed")) {
      this.setState({ noMoreVideosText: true });
    }
  }

  createVideoListItems() {
    const { videos, type } = this.props;
    return videos.map( (video, i) => {
      return <VideoListItem type={type} video={video} key={i} />;
    });
  }

  handleLoadMore(e) {
    const { action } = this.props;
    action(this.state.numberOfRequests);
    this.setState({ numberOfRequests: this.state.numberOfRequests + 1});
  }

  createLoadButton() {
    const { videos, type } = this.props;
    if (this.state.noMoreVideosText) {
      return <span className="thats-all">THAT'S ALL FOLKS!</span>;
    } else {
      const innerText = "+ Load more videos";
      return(
        <button className="load-more-button"
          onClick={this.handleLoadMore}>{innerText}</button>
      );
    }
  }

  render() {
    const { videos, type } = this.props;
    const videoListItems = this.createVideoListItems();
    const loadMoreButton = type === "feed" ? this.createLoadButton() : '';
    return(
      <ul className="video-list">
        {videoListItems}
        <div className="load-button-wrapper">
          {loadMoreButton}
        </div>
      </ul>
    );
  }
}

export default withRouter(VideoList);
