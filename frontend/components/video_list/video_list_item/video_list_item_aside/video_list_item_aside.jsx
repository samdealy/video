import React from "react";
import { Link, Route } from 'react-router-dom';
import FeedAside from './feed_aside';
import MyVideosAside from './my_videos_aside';

export default class VideoListItemAside extends React.Component {

  feedAside() {
    const { iconUrl, userName, timeStamp } = this.props;
    return (<FeedAside iconUrl={iconUrl}
              userName={userName} timeStamp={timeStamp} />);
  }

  render() {
    const { timeStamp } = this.props;
    return(
      <aside className="video-list-item-aside">
        <Route exact path='/home' render={() => this.feedAside()} />
        <Route exact path='/home/myvideos'
          render={() => <MyVideosAside timeStamp={timeStamp} />} />
      </aside>
    );
  }
}
