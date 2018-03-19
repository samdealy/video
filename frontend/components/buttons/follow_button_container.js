import React from 'react';
import { connect } from 'react-redux';
import FollowButton from './follow_button';
import { withRouter } from 'react-router-dom';
import { follow, unfollow } from '../../actions/follow_actions';
import { getCurrentUser } from '../../reducers/selectors';

const mapStateToProps = (state, { uploaderId }) => {
  const currentUser = getCurrentUser(state);
  const alreadyFollows = currentUser.leader_ids[uploaderId] || false;
  const classState = alreadyFollows ? "following" : "not-following";
  
  return ({ classState, uploaderId, alreadyFollows });
};

const mapDispatchToProps = dispatch => {
  return ({
    follow: uploaderId => dispatch(follow(uploaderId)),
    unfollow: uploaderId => dispatch(unfollow(uploaderId))
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FollowButton));
