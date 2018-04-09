import * as APIUtil from '../util/video_api_util';

export const RECEIVE_VIDEO = "RECEIVE_VIDEO";
export const RECEIVE_MY_VIDEOS = "RECEIVE_MY_VIDEOS";
export const RECEIVE_FEED_VIDEOS = "RECEIVE_FEED_VIDEOS";
export const RECEIVE_PROFILE_VIDEOS = "RECEIVE_PROFILE_VIDEOS";
export const RECEIVE_VIDEO_ERRORS = "RECEIVE_VIDEO_ERRORS";
export const RESET_FEED_PAGE = "RESET_FEED_PAGE";
export const CLEAR_VIDEOS = "CLEAR_VIDEOS";

export const clearVideos = () => {
  return({
    type: CLEAR_VIDEOS
  });
};

export const resetFeedPage = () => {
  return({
    type: RESET_FEED_PAGE
  });
};

export const receiveVideo = payload => {
  return({
    type: RECEIVE_VIDEO,
    video: payload.video,
    users: payload.users,
    comments: payload.comments
  });
};

export const receiveMyVideos = payload => {
  return({
    type: RECEIVE_MY_VIDEOS,
    videos: payload.videos,
    users: payload.users,
  });
};

export const receiveFeedVideos = payload => {
  return({
    type: RECEIVE_FEED_VIDEOS,
    videos: payload.videos,
    users: payload.users,
    numberOfFeedVideos: payload.number_of_feed_videos
  });
};

export const receiveProfileVideos = payload => {
  return({
    type: RECEIVE_PROFILE_VIDEOS,
    videos: payload.videos,
    user: payload.user,
  });
};

export const receiveErrors = errors => {
  return({
    type: RECEIVE_VIDEO_ERRORS,
    errors
  });
};

export const fetchProfileVideos = userId => dispatch => {
  return APIUtil.fetchProfileVideos(userId)
    .then( videos => dispatch( receiveProfileVideos(videos)),
           err    => dispatch( receiveErrors(err.responseJSON)));
};

export const fetchMyVideos = () => dispatch => {
  return APIUtil.fetchMyVideos()
    .then( videos => dispatch( receiveMyVideos(videos)),
           err    => dispatch( receiveErrors(err.responseJSON)));
};

export const fetchFeedVideos = requestCounter => dispatch => {
  return APIUtil.fetchFeedVideos(requestCounter)
    .then( videos => dispatch( receiveFeedVideos(videos)),
           err    => dispatch( receiveErrors(err.responseJSON)));
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
