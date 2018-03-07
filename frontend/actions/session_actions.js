import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER   = 'RECEIVE_CURRENT_USER';
export const REMOVE_CURRENT_USER    = 'REMOVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const join = (user) => dispatch => {
   return APIUtil.join(user)
    .then( user => dispatch(receiveCurrentUser(user)))
    .fail( err => dispatch(receiveErrors(err.responseJSON)));
};

export const login = user => dispatch => {
   return APIUtil.login(user)
     .then( user => dispatch(receiveCurrentUser(user)) )
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

export const receiveCurrentUser = user => {
  return {
    type: RECEIVE_CURRENT_USER,
    user
  };
};

export const removeCurrentUser = () => {
  return {
    type: REMOVE_CURRENT_USER
  };
};
