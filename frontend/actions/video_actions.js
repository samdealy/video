import * as APIUtil from '../util/video_api_util';

export const RECEIVE_VIDEO = "RECEIVE_VIDEO";
export const RECEIVE_VIDEO_ERRORS = "RECEIVE_VIDEO_ERRORS";

export const receiveVideo = payload => {
  return({
    type: RECEIVE_VIDEO,
    video: payload.video,
    user: payload.user
  });
};

export const receiveErrors = errors => {
  return({
    type: RECEIVE_VIDEO_ERRORS,
    errors
  });
};

export const fetchVideo = videoId => dispatch => {
  return APIUtil.fetchVideo(videoId)
    .then( video => dispatch( receiveVideo(video)),
           err   => dispatch( receiveErrors(err.responseJSON)));
};

export const createVideo = video => dispatch => {
  return APIUtil.createVideo(video)
    .then( video => dispatch( receiveVideo(video)),
           err   => dispatch( receiveErrors(err.responseJSON)));
};

export const editVideo = video => dispatch => {
  return APIUtil.editVideo(video)
    .then( video => dispatch( receiveVideo(video)),
           err   => dispatch( receiveErrors(err.responseJSON)));
};

export const increaseViews = videoId => dispatch => {
  return APIUtil.increaseViews(videoId)
    .then( video => dispatch( receiveVideo(video)),
           err   => dispatch( receiveErrors(err.responseJSON)));
};
