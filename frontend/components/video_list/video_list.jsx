import React from "react";
import { withRouter } from 'react-router-dom';
import VideoListItem from './video_list_item/video_list_item';

class VideoList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      noMoreVideosText: false
    };
    this.handleLoadMore = this.handleLoadMore.bind(this);
  }

  componentDidMount() {
    const { match, action } = this.props;
    if (match.path === "/home") {
      this.handleLoadMore();
    } else {
      action();
    }
  }

  componentWillUnmount() {
    const { match, resetFeedPage } = this.props;
    if (match.path === "/home") {
      resetFeedPage();
    }
  }

  componentWillReceiveProps(nextProps) {
    const { numberOfFeedVideos }  = this.props;
    if (nextProps.videos.length === numberOfFeedVideos) {
      this.setState({ noMoreVideosText: true });
    }
  }

  createVideoListItems() {
    const { videos } = this.props;
    return videos.map( (video, i) => {
      return <VideoListItem video={video} key={i}  />;
    });
  }

  handleLoadMore(e) {
    const { action, incrementFeedPage, pageNumber } = this.props;
    action(pageNumber);
  }

  createLoadButton() {
    const { videos } = this.props;
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
    const { videos, match } = this.props;

    const videoListItems = this.createVideoListItems();
    const loadMoreButton = match.path === "/home" ? this.createLoadButton() : '';
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
