import React from "react";
import UserListItem from '../user/user_list_item';
import FollowButtonContainer from "../buttons/follow_button_container";
import VideoStatsContainer from './video_stats_container';
import videoStats from './video_stats_container';


export default class VideoInfo extends React.Component {
  render() {
    let { className, videoTitle, videoTimeStamp,
          userName, iconUrl, videoDescription,
          followPresent, statsPresent, uploaderId } = this.props;

    videoTimeStamp   = videoTimeStamp || "";
    videoDescription = videoDescription || "";

    const followButton = followPresent ?
      <FollowButtonContainer uploaderId={uploaderid}/> : "";
    const videoStats = statsPresent ?
      <VideoStatsContainer /> : "";


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
