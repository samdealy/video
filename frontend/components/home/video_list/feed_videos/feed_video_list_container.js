import React from 'react';
import VideoList from '../video_list';
import { connect } from 'react-redux';
import { getUser, getCurrentUser } from '../../reducers/selectors';

const mapStateToProps = state => { 
  
  return ({

  });
};

const mapDispatchToProps = dispatch => {
  return { };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FeedVideos));