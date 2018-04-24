import React from 'react';
import { Link } from 'react-router-dom';
import FollowButtonContainer from '../../buttons/follow_button_container';

export default class SearchUserListItem extends React.Component {

  render() {
    const { userId, userName, numberOfFollowers,
      numberOfVideos, iconUrl } = this.props;

    const videosText = numberOfVideos === 1 ?
      `1 video` : `${numberOfVideos} videos`;

    const followersText = numberOfFollowers === 1 ?
      `1 follower` : `${numberOfFollowers} followers`;

    return(
      <div className='user-search-list-item'>
        <Link to={`/user/${userId}`}>
          <img className="user-icon" src={iconUrl} ></img>
        </Link>
        <ul className='username-videos-followers'>
          <Link to={`/user/${userId}`}>
            <li><h2>{userName}</h2></li>
          </Link>
          <li className='user-info'>
            <span>{videosText}</span>
            <span>|</span>
            <span>{followersText}</span>
          </li>
          <li>
            <FollowButtonContainer userId={userId} />
          </li>
        </ul>
      </div>
    )
  }
}
