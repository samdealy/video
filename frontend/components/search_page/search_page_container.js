import React from 'react';
import { connect } from 'react-redux';
import SearchPage from './search_page';
import { getSearchVideos, getSearchUsers } from '../../reducers/selectors';
import { fetchSearch } from '../../actions/search_actions';

const mapStateToProps = state => {
  const videos = getSearchVideos(state) || [];
  const users  = getSearchUsers(state)  || [];
  return({ videos, users })
}

const mapDispatchToProps = dispatch => {
  return {
    fetchSearch: prefix => dispatch(fetchSearch(prefix))
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
