import React from 'react';
import { connect } from 'react-redux';
import SearchBar from './search_bar';
import { fetchSearch } from '../../actions/search_actions';


const mapDispatchToProps = dispatch => {
  return {
    fetchSearch: prefix => dispatch(fetchSearch(prefix))
  };
};

export default connect(null, mapDispatchToProps)(SearchBar);
