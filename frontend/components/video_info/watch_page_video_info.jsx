import React from "react";
import UserListItem from '../user/user_list_item';
import FollowButtonContainer from "../buttons/follow_button_container";
import VideoStatsContainer from './video_stats_container';
import videoStats from './video_stats_container';


export default class VideoInfo extends React.Component {

  followButton() {
    const { followPresent, uploaderId } = this.props;
    return followPresent ?
      <FollowButtonContainer uploaderId={uploaderId}/> : "";
  }

  videoStats() {
    const { statsPresent } = this.props;
    return statsPresent ? <VideoStatsContainer /> : "";
  }

  render() {
    const { className, videoTitle, videoTimeStamp,
          userName, iconUrl, videoDescription,
       } = this.props;

    const videoStats   = this.videoStats();
    const followButton = this.followButton();

    return(
      <div className={className}>
        <h2 className="page-header">{videoTitle}</h2>
        <div><span className="time-stamp">{videoTimeStamp}</span></div>
        <ul className="user-list">
          <UserListItem userName={userName} iconUrl={iconUrl} />
          {followButton}
        </ul>
        {videoStats}
        <p>{videoDescription}</p>
      </div>
    );
  }
}