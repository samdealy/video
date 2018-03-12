import React from "React";

export default class CommentListItem extends React.Component {

  render() {
    const { iconUrl, userName, body } = this.props;
    return(
      <li className="user-list-item">
        <div className="comment-icon-wrapper">
          <img className="user-icon" src={iconUrl}></img>
        </div>
        <div className="comment-body">
          <h4>{userName}</h4>
          <p>{body}</p>
        </div>
      </li>);
  }
}
