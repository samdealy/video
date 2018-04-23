import React from 'react';
import { withRouter } from 'react-router-dom';
import SearchAsideContainer from './search_aside/search_aside_container';
import SearchVideoList from './search_list/search_video_list';
import SearchUserList from './search_list/search_user_list';


class SearchPage extends React.Component {

  componentDidMount() {
    const { match } = this.props
    this.props.fetchSearch(match.params.prefix);
  }

  render() {
    const { videos, users, match } = this.props

    const list = match.path === '/search/video/:prefix' ?
      <SearchVideoList videos={videos} /> : <SearchUserList users={users} />

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
