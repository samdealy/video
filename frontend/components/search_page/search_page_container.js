import React from 'react';
import { connect } from 'react-redux';
import SearchPage from './search_page';
// import { getSearchVideos } from '../../reducers/selectors'

const mapStateToProps = state => {
  //TODO Create getSearchVideos and getSearchUsers selectors
  // const videos = getSearchVideos(state) || {};
  // const users  = getSearchUsers(state)  || {}
  return({

  })
}


export default connect(mapStateToProps)(SearchPage);
