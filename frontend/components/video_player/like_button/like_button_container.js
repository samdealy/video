// import React from 'react';
// import { connect } from 'react-redux';
// import LikeButton from './like_button';
// import { withRouter } from 'react-router-dom';
// import { currentVideo } from '../../../reducers/selectors';
// 
// const mapStateToProps = (state, { match }) => {
//   const videoId = parseInt(match.params.videoId);
//   const video = currentVideo(state, videoId) || {};
//   return ({
//     video
//   });
// };
// 
// const mapDispatchToProps = dispatch => {
//   return {
//     editVideo: (video) => dispatch(editVideo(video))
//   };
// };
// 
// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LikeButton));
