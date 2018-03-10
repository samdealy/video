import React from "react";
import { Link } from 'react-router-dom';

export default class SettingsAside extends React.Component {

  render() {
    const { title, timeStamp, thumbUrl } = this.props
    return(
      <div className="settings-aside-wrapper">
        <div className="settings-aside">
          <Link to='/' >
            <img src={thumbUrl}></img>
            <div className="thumbnail-info">
              <h4>{title}</h4>
              <span>Uploaded {timeStamp}</span>
            </div>
          </Link>
        </div>
        <Link target="_blank" to='/'>Go to video</Link>
      </div>
    );
  }
}
