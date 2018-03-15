import React from "react";
import { Link, withRouter } from "react-router-dom";

class FeedLinkBar extends React.Component {

  render() {
    const { match } = this.props;
    let linkClasses = ["active", ""];
    if (match.path !== "/home") linkClasses = linkClasses.reverse();

    return(
      <div className="feed-link-bar">
        <div className="tabs"></div>
        <Link className={linkClasses[0]} to='/home'>My Feed</Link>
        <Link className={linkClasses[1]} to='/home/myvideos'>My Videos</Link>
      </div>
    );
  }
}

export default withRouter(FeedLinkBar);
