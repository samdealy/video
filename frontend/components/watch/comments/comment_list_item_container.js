import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CommentListItem from './comment_list_item';
import { getComments, currentVideo } from '../../../reducers/selectors';
import { createComment, editComment, deleteComment } from '../../../actions/comment_actions';

const mapStateToProps = (state, { comment, match }) => {
  const commentAuthor = state.entities.users[comment.user_id] || {};

  
  return ({
    iconUrl: commentAuthor.image_url || "",
    userName: commentAuthor.username || "",
    timeStamp: comment.timestamp || "",
    body: comment.body || "",
    commentId: comment.id || "",
    userId: comment.user_id || "",
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
