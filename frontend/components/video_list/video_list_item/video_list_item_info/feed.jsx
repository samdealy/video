import React from 'react';
import { Link } from 'react-router-dom';
import TimeAgo from '../../../time_ago/time_ago.jsx';

export default class FeedVideoInfo extends React.Component {
  render() {
    const { title, description, timeStamp,
            videoId, userName, uploaderId, iconUrl } = this.props;

    return(
        <div className="video-list-item-info">
          <div className="top-half">
            <Link to={`/user/${uploaderId}`}>
              <img className="user-icon" src={iconUrl}></img>
            </Link>
            <div className="title-user-timestamp">
              <Link to={`/watch/${videoId}`}>
                <h3>{title}</h3>
              </Link>
              <div className="author-timestamp">
                <span className="from">from </span>
                <Link to={`/user/${uploaderId}`}>
                  <span className="username">{userName}</span>
                </Link>
                <span className="timestamp">
                  <TimeAgo timeStamp={timeStamp} />
                </span>
              </div>
            </div>
          </div>
          <div className="bottom-half"><p>{description}</p></div>
        </div>
    )
  }
}
