import React from "react";
import UserListItem from '../user/user_list_item';
import FollowButtonContainer from "../buttons/follow_button_container";
import VideoStatsContainer from './video_stats_container';
import videoStats from './video_stats_container';
import TimeAgo from '../time_ago/time_ago.jsx';
import SettingsLink from '../buttons/settings_link';

export default class VideoInfo extends React.Component {

  followButton() {
    const { followPresent, uploaderId } = this.props;
    return followPresent ?
      <FollowButtonContainer uploaderId={uploaderId}/> : "";
  }

  settingsLink() {
    const { settingsPresent, videoId } = this.props;
    return settingsPresent ? <SettingsLink videoId={videoId} /> : "";
  }

  videoStats() {
    const { statsPresent } = this.props;
    return statsPresent ? <VideoStatsContainer /> : "";
  }

  render() {
    const { className, videoTitle, videoTimeStamp,
          userName, iconUrl, videoDescription, myVideoClass, uploaderId
       } = this.props;

    const videoStats   = this.videoStats();
    const followButton = this.followButton();
    const settingsLink = this.settingsLink();


    return(
      <div className={className}>
        <h2 className="page-header">{videoTitle}</h2>
        <div>
          <span className="time-stamp">
            <TimeAgo timeStamp={videoTimeStamp} />
          </span>
        </div>
        <ul className={`user-list ${myVideoClass}`}>
          <UserListItem userName={userName} iconUrl={iconUrl} uploaderId={uploaderId} />
          {followButton}
          {settingsLink}
        </ul>
        {videoStats}
        <p>{videoDescription}</p>
      </div>
    );
  }
}
