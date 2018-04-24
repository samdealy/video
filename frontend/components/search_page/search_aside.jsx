import React from 'react'
import { withRouter, Link } from 'react-router-dom';

class SearchAside extends React.Component {
  constructor(props) {
    super(props);
    const { match } = this.props;
    const selectedOption = match.path === '/search/video/:prefix' ?
      'videos' : 'people';
    this.state = {
      selectedOption
    }
  }

  render() {
    const { videos, users, match } = this.props;
    const { selectedOption } = this.state;
    const [numberOfVideos, numberOfUsers] = [videos.length, users.length];

    const prefix = match.params.prefix;

    return(
      <div className='search-aside-wrapper'>
        <h2>Show results for</h2>
        <form className='search-aside'>
          <label className='radio'>
            <Link to={`/search/video/${prefix}`}>
              <input onChange={() => {}} type='radio'
                value='videos' checked={selectedOption === 'videos'}></input>
              <span className='custom-radio'></span>
              <p>Videos <span>({numberOfVideos})</span></p>
            </Link>
          </label>
          <label className='radio'>
            <Link to={`/search/user/${prefix}`}>
              <input onChange={() => {}} type='radio'
                value='people' checked={selectedOption === 'people'}></input>
              <span className='custom-radio'></span>
              <p>People <span>({numberOfUsers})</span></p>
            </Link>
          </label>
        </form>
    </div>
    )
  }
}

export default withRouter(SearchAside);
