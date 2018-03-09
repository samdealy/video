import * as APIUtil from '../util/video_api_util';

export const RECEIVE_VIDEO = "RECEIVE_VIDEO";
export const RECEIVE_VIDEO_ERRORS = "RECEIVE_VIDEO_ERRORS";

export const receiveVideo = video => {
  return({
    type: RECEIVE_VIDEO,
    video
  });
};

export const receiveErrors = errors => {
  return({
    type: RECEIVE_VIDEO_ERRORS,
    errors
  });
};

export const createVideo = video => dispatch => {
  return APIUtil.createVideo(video)
    .then( bench => dispatch( receiveVideo(video)),
           err   => dispatch( receiveErrors(err.responseJSON)));
};

export const editVideo = video => dispatch => {
  return APIUtil.editVideo(video)
    .then( bench => dispatch( receiveVideo(video)),
           err   => dispatch( receiveErrors(err.responseJSON)));
};
