import React from 'react';
import { connect } from 'react-redux';
import FollowButton from './follow_button';
import { withRouter } from 'react-router-dom';
import { follow, unfollow } from '../../actions/follow_actions';
import { getCurrentUser } from '../../reducers/selectors';

const mapStateToProps = (state, { userId }) => {
  const currentUser = getCurrentUser(state);
  const alreadyFollows = currentUser.leader_ids[userId] || false;
  const classState = alreadyFollows ? "following" : "not-following";

  return ({ classState, userId, alreadyFollows });
};

const mapDispatchToProps = dispatch => {
  return ({
    follow: userId => dispatch(follow(userId)),
    unfollow: userId => dispatch(unfollow(userId))
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FollowButton));
