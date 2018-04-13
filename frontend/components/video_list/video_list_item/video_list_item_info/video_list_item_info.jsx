import React from "react";
import FeedVideoInfo from './feed';

export default class VideoListItemInfo extends React.Component {

  render() {
    const { title, description, timeStamp,
            videoId, userName, uploaderId, iconUrl, pageUrl } = this.props;

    return(
      <FeedVideoInfo title={title} description={description} timeStamp={timeStamp}
        videoId={videoId} userName={userName} uploaderId={uploaderId}
        iconUrl={iconUrl} pageUrl={pageUrl} />
    );

  }
}
