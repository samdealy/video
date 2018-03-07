import * as APIUtil from '../util/session_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const REMOVE_CURRENT_USER = 'REMOVE_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const join = (user) => dispatch => {
   return APIUtil.join(user)
    .then( payload => dispatch(receiveUser(payload)))
    .fail( err => dispatch(receiveErrors(err.responseJSON)));
};

export const login = user => dispatch => {
   return APIUtil.login(user)
     .then( payload => dispatch(receiveUser(payload)) )
     .fail( err => dispatch(receiveErrors(err.responseJSON)));
};

export const logout = () => dispatch => {
   return APIUtil.logout().then( user => dispatch(removeCurrentUser()));
};

export const receiveErrors = errors => {
  return {
    type: RECEIVE_SESSION_ERRORS, //we might need to add something here
    errors
  };
};

export const receiveUser = userBundle => {
  return {
    type: RECEIVE_USER,
    userBundle
  };
};

export const removeCurrentUser = () => {
  return {
    type: REMOVE_CURRENT_USER
  };
};
