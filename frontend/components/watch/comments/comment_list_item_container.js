import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CommentListItem from './comment_list_item';
import { getComments, currentVideo } from '../../../reducers/selectors';
import { createComment, editComment, deleteComment } from '../../../actions/comment_actions';

const mapStateToProps = (state, { comment, match }) => {
  const currentComment = comment || {};
  const commentAuthor = state.entities.users[currentComment.user_id] || {};
  const commentAuthorId = commentAuthor.id || "";

  return ({
    iconUrl: commentAuthor.image_url || "",
    userName: commentAuthor.username || "",
    commentAuthorId,
    timeStamp: currentComment.timestamp || "",
    body: currentComment.body || "",
    commentId: currentComment.id || "",
    userId: currentComment.user_id || "",
    videoId: match.params.videoId || "",
    currentUserId: state.session.currentUserId || "",
  });
};

const mapDispatchToProps = dispatch => {
  return {
    deleteComment: commentId => dispatch(deleteComment(commentId))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentListItem));
