import * as APIUtil from '../util/search_api_util';

export const RECEIVE_SEARCH = "RECEIVE_SEARCH";
export const RECEIVE_SEARCH_ERRORS = "RECEIVE_SEARCH_ERRORS";

export const receiveSearchErrors = errors => {
  return({
    type: RECEIVE_SEARCH_ERRORS,
    errors
  });
};

export const receiveSearch = payload => {
  return({
    type: RECEIVE_SEARCH,
    videos: payload.videos,
    users: payload.users
  });
}

export const fetchSearch = prefix => dispatch => {
  return APIUtil.fetchSearch(prefix)
    .then( payload => dispatch(receiveSearch(payload)))
    .fail( err => dispatch(receiveSearchErrors(err.responseJSON)));
}
