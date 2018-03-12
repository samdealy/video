import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CommentListItem from './comment_list_item';
import { getComments, currentVideo } from '../../../reducers/selectors';
import { createComment, editComment, deleteComment } from '../../../actions/comment_actions';

const mapStateToProps = (state, { comment }) => {
  const commentAuthor = state.entities.users[comment.user_id] || {};
  return ({
    iconUrl: commentAuthor.image_url || "",
    userName: commentAuthor.username || "",
    body: comment.body || ""
  });
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentListItem));
