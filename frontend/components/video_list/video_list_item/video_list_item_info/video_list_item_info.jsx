import React from "react";
import { Link } from 'react-router-dom';
import TimeAgo from '../../../time_ago/time_ago.jsx'
export default class VideoListItemInfo extends React.Component {

  render() {
    const { title, description, timeStamp,
            videoId, userName, iconUrl } = this.props;

    return(
      <div className="video-list-item-info">
        <div className="top-half">
          <Link to='/'>
            <img className="user-icon" src={iconUrl}></img>
          </Link>
          <div className="title-user-timestamp">
            <Link to={`/watch/${videoId}`}>
              <h3>{title}</h3>
            </Link>
            <div className="author-timestamp">
              <span className="from">from </span>
              <span className="username">{userName}</span>
              <span className="timestamp">
                <TimeAgo timeStamp={timeStamp} />
              </span>
            </div>
          </div>
        </div>
        <div className="bottom-half"><p>{description}</p></div>
      </div>
    );

  }
}
