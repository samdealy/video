import React from "react";
import CommentListItemContainer from './comment_list_item_container';
import CreateCommentFormContainer from './comment_form/create_comment_form_container.jsx';

export default class Comments extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { comments } = this.props;
    const commentSize = comments.length;
    const commentsList = comments.map( (comment, i) => {
      return (<CommentListItemContainer key={i} comment={comment} />);
    });

    return(
      <div className="comments-section">
        <h3>{commentSize} Comments</h3>
        <ul className="comments-list">
          {commentsList}
        </ul>
        <CreateCommentFormContainer />
      </div>);
  }
}
