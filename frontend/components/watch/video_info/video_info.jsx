import React from "react";
import UserListItem from '../../user/user_list_item';

export default class VideoInfo extends React.Component {
  render() {
    const { videoTitle, videoTimeStamp,
            userName, iconUrl, videoDescription } = this.props;
    return(
      <div className="video-info">
        <h2 className="page-header">{videoTitle}</h2>
        <span className="time-stamp">{videoTimeStamp}</span>
        <ul className="user-list-item-container">
          <UserListItem userName={userName} iconUrl={iconUrl} />
        </ul>
        <p>{videoDescription}</p>
      </div>
    );
  }

}
