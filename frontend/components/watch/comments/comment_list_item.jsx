import React from "react";

export default class CommentListItem extends React.Component {

  editDelete() {
    const { deleteComment, commentId } = this.props;
    return(
      <div className="edit-delete-comment">
        <button className="edit-comment">Edit</button>
        <button onClick={ () => deleteComment(commentId)}
                className="delete-comment">Delete</button>
      </div>
    );
  }

  render() {
    const { iconUrl, userName, timeStamp, body, currentUserId, userId } = this.props;
    const editDelete = currentUserId === userId ? this.editDelete() : "";

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
        {editDelete}
      </li>
    );
  }
}
