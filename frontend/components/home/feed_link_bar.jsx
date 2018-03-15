import React from "react";
import { Link } from "react-router-dom";

export default class FeedLinkBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myFeedActive: true,
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
    const { myFeedActive, myVideosActive } = this.state;
    const myFeedClass   = myFeedActive ? "active" : "";
    const myVideosClass = myVideosActive ? "active" : "";
    return(
      <div className="feed-link-bar">
        <div className="tabs"></div>
        <Link className={myFeedClass} onClick={this.handleClick("feed")} to='/home'>
          My Feed</Link>
        <Link className={myVideosClass} onClick={this.handleClick("link")} to='/home/myvideos'>
          My Videos</Link>
      </div>
    );
  }
}
