import * as APIUtil from '../util/video_api_util';

export const RECEIVE_VIDEO = "RECEIVE_VIDEO";
export const RECEIVE_VIDEOS = "RECEIVE_VIDEOS";
export const RECEIVE_VIDEO_ERRORS = "RECEIVE_VIDEO_ERRORS";

export const receiveVideo = payload => {
  return({
    type: RECEIVE_VIDEO,
    video: payload.video,
    users: payload.users,
    comments: payload.comments
  });
};

export const receiveVideos = payload => {
  return({
    type: RECEIVE_VIDEOS,
    videos: payload.videos,
    users: payload.users,
  });
};

export const receiveErrors = errors => {
  return({
    type: RECEIVE_VIDEO_ERRORS,
    errors
  });
};


export const fetchFeedVideos = requestCounter => dispatch => {
  return APIUtil.fetchFeedVideos(requestCounter)
    .then( videos => dispatch( receiveVideos(videos)),
           err   => dispatch(  receiveErrors(err.responseJSON)));
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
