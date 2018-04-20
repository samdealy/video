import React from 'react';
import { withRouter } from 'react-router-dom';
import SearchAsideContainer from './search_aside/search_aside_container';
import SearchVideoList from './search_list/search_video_list';


class SearchPage extends React.Component {

  componentDidMount() {
    const { match } = this.props
    this.props.fetchSearch(match.params.prefix);
  }

  render() {
    const { videos, users, match } = this.props

    if(match.path === '/search/video/:prefix') {
      var list = <SearchVideoList videos={videos} />
      var resultNumber = videos.length;
    } else {
      var list = '';
      var resultNumber = users.length;
    }
    return(
      <div className="search-page">
        <div className='search-aside-list'>
          <SearchAsideContainer />
          {list}
        </div>
      </div>
    )
  }
}

export default withRouter(SearchPage)
