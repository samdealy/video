import React from "react";
import { Link } from 'react-router-dom';

export default class VideoListItemInfo extends React.Component {

  render() {
    const { title, description, timeStamp, userName, iconUrl } = this.props;
    return(
      <div className="video-list-item-info">
        <div className="top-half">
          <Link to='/'>
            <img className="user-icon" src={iconUrl}></img>
          </Link>
          <div className="title-user-timestamp">
            <h3>{title}</h3>
            <div className="author-timestamp">
              <span className="from">from</span>
              <span className="userName">{userName}</span>
              <span className="timeStamp">{timeStamp}</span>
            </div>
          </div>
        </div>
        <div className="bottom-half">{description}</div>
      </div>
    );

  }
}
