import React from "react";

export default class CommentListItem extends React.Component {

  render() {
    const { iconUrl, userName, timeStamp, body } = this.props;
    
    return(
      <li className="user-list-item">
        <div className="comment-icon-wrapper">
          <img className="user-icon" src={iconUrl}></img>
        </div>
        <div className="comment-body">
          <div className="username-timestamp">
            <h4>{userName}</h4>
            <h6>{timeStamp}</h6>
          </div>
          <p>{body}</p>
        </div>
      </li>);
  }
}
