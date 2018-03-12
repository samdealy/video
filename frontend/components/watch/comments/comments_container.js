import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Comments from './comments';
import { getComments, currentVideo } from '../../../reducers/selectors';
import { createComment, editComment, deleteComment } from '../../../actions/comment_actions';

const mapStateToProps = (state, { match }) => {
  const videoId = parseInt(match.params.videoId);
  const video = currentVideo(state, videoId) || {};
  const commentIds = video.comment_ids || [];
  const comments = getComments(state, commentIds) || [];
  return ({
    comments
  });
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Comments));
