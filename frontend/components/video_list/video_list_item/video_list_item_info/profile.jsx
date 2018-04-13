import React from 'react';
import { Link } from 'react-router-dom';

export default class ProfileVideoInfo extends React.Component {
  render() {
    const { title, videoId, userName, uploaderId, iconUrl,
            pageUrl, viewCount} = this.props;

    const viewsDisplay = viewCount === 1 ?
      `${viewCount} play` : `${viewCount} plays`

    return(
      <div className="video-list-item-info profile">
        <Link to={`/watch/${videoId}`}>
          <h3>{title}</h3>
        </Link>
        <div className="icon-username-plays">
          <Link to={`/user/${uploaderId}`}>
            <img className="user-icon" src={iconUrl}></img>
          </Link>

          <Link to={`/user/${uploaderId}`}>
            <span className="username">{userName}</span>
          </Link>
          <span className='separator'> | </span>
          <span className='views'>{viewsDisplay}</span>
        </div>
      </div>
    )
  }
}
