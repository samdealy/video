import React from "react";
import FeedVideoInfo from './feed';
import ProfileVideoInfo from './profile';


export default class VideoListItemInfo extends React.Component {

  render() {
    const { title, description, timeStamp, videoId, userName,
         uploaderId, iconUrl, pagePath, viewCount } = this.props;
         
    if(pagePath === '/home' || pagePath === '/home/myvideos') {
      return(
        <FeedVideoInfo title={title} description={description} timeStamp={timeStamp}
          videoId={videoId} userName={userName} uploaderId={uploaderId}
          iconUrl={iconUrl} />
      );
    } else {
      return(<ProfileVideoInfo title={title} videoId={videoId} userName={userName}
              uploaderId={uploaderId} iconUrl={iconUrl} viewCount={viewCount} />)
    }

  }
}
