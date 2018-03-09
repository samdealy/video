import React from "react";

export default class SettingsAside extends React.Component {

  render() {
    const { title, timeStamp, thumbUrl } = this.props
    return(
      <div>
        <img src={thumbUrl}></img>
        <h4>{title}</h4>
        <span>Uploaded {timeStamp}</span>
      </div>
    );
  }
}
