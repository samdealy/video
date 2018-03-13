import * as APIUtil from '../util/comment_api_util';

import { RECEIVE_VIDEO, receiveVideo, receiveErrors } from "./video_actions";

export const createComment = comment => dispatch => {
  return APIUtil.createComment(comment)
    .then( video => dispatch( receiveVideo(video)),
           err   => dispatch( receiveErrors(err.responseJSON)));
};

export const editComment = comment => dispatch => {
  return APIUtil.editComment(comment)
    .then( video => dispatch( receiveVideo(video)),
           err   => dispatch( receiveErrors(err.responseJSON)));
};

export const deleteComment = commentId => dispatch => {
  
  return APIUtil.deleteComment(commentId)
    .then( video => dispatch( receiveVideo(video)),
           err   => dispatch( receiveErrors(err.responseJSON)));
};
