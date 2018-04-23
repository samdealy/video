import React from 'react';
import { withRouter } from 'react-router-dom';
import SearchAside from './search_aside';
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
          <SearchAside videos={videos} users={users} />
          {list}
        </div>
      </div>
    )
  }
}

export default withRouter(SearchPage)
