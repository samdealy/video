import React from "react";
import { Link } from "react-router-dom";

export default class FeedLinkBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myFeedActive: false,
      myVideosActive: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(type) {
    const newState = type == "feed" ? [true, false] : [false, true];
    return (e) => this.setState({
      myFeedActive: newState[0], myVideosActive: newState[1]
    });
  }

  render() {
    return(
      <div className="feed-link-bar">
        <div className="tabs"></div>
        <Link onClick={this.handleClick("feed")} to='/home'>My Feed</Link>
        <Link onClick={this.handleClick("link")} to='/myvideos'>My Videos</Link>
      </div>
    );
  }
}
