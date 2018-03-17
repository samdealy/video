import React from "react";
import { Link } from 'react-router-dom';
import { fullDate } from '../../util/dates.js';

export default class SettingsAside extends React.Component {

  render() {
    const { title, timeStamp, thumbUrl, videoId } = this.props;
    const dateTime = fullDate(timeStamp);

    return(
      <div className="settings-aside-wrapper">
        <div className="settings-aside">
          <Link to={`/watch/${videoId}`} >
            <img src={thumbUrl}></img>
            <div className="thumbnail-info">
              <h4>{title}</h4>
              <span>Uploaded {dateTime}</span>
            </div>
          </Link>
        </div>
        <Link target="_blank" to={`/watch/${videoId}`}>Go to video</Link>
      </div>
    );
  }
}
