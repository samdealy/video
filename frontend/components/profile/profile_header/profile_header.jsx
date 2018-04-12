import React from 'react';

export default class ProfileHeader extends React.Component {

  render() {
    const { userImage, userName, videoCount, followerCount } = this.props;
    const followerText = followerCount === 1 ? 'Follower' : 'Followers';
    
    return(
      <div className='profile-header'>
        <img className="user-icon" src={userImage} ></img>
        <h2>{userName}</h2>
        <ul className='profile-stats'>
          <li>{videoCount || 0} Videos</li>
          <li><span>|</span></li>
          <li>{followerCount} {followerText}</li>
        </ul>
      </div>
    )
  }
}
