import React from 'react';

export default class ProfileHeader extends React.Component {

  render() {
    const { userImage, userName, videoCount, followerCount } = this.props;
    return(
      <div className='profile-header'>
        <img className="user-icon" src={userImage} ></img>
        <h2>{userName}</h2>
        <ul className='profile-stats'>
          <li>{videoCount || 0} Videos</li>
          <li><span>|</span></li>
          <li>{followerCount} Followers</li>
        </ul>
      </div>
    )
  }
}
