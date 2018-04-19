import React from 'react';
import { connect } from 'react-redux';
import SearchPage from './search_page';
import { getSearchVideos, getSearchUsers } from '../../reducers/selectors';

const mapStateToProps = state => {
  const videos = getSearchVideos(state) || [];
  const users  = getSearchUsers(state)  || [];
  return({ videos, users })
}


export default connect(mapStateToProps)(SearchPage);
