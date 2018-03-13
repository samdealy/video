import React from "react";
import CommentListItemContainer from './comment_list_item_container';
import CreateCommentFormContainer from './comment_form/create_comment_form_container.jsx';

export default class Comments extends React.Component {
  constructor(props) {
    super(props);
  }

  commentHeader(numberOfComments) {
    if (numberOfComments === 0) {
      return "Be the first to leave a comment:";
    } else if(numberOfComments ===1) {
      return "1 Comment";
    } else {
      return `${numberOfComments} Comments`;
    }
  }

  render() {
    const { comments } = this.props;
    const numberOfComments = comments.length;
    const commentHeader = this.commentHeader(numberOfComments);

    const commentsList = comments.map( (comment, i) => {
      return (<CommentListItemContainer key={i} comment={comment} />);
    });

    return(
      <div className="comments-section">
        <h3>{commentHeader}</h3>
        <ul className="comments-list">
          {commentsList}
        </ul>
        <CreateCommentFormContainer />
      </div>);
  }
}
