import React from 'react'
import { withRouter } from 'react-router-dom';
import VideoListItem from '../../video_list/video_list_item/video_list_item'

class SearchVideoList extends React.Component {
  render() {
    const { videos, match } = this.props;

    const videoListItems =  videos.map( (video, i) => {
      return <VideoListItem video={video} key={i}  />;
    });

    const resultsNumber = videos.length;
    const resultsText   = videos.length === 1 ?
      `1 result` : `${resultsNumber} results`;
      
    const prefix = match.params.prefix;
    return(
      <div className="results-video-list">
        <p className='results-text'>{resultsText} for <strong>{prefix}</strong></p>
        <ul className='search-list'>
          {videoListItems}
        </ul>
      </div>
    )
  }
}

export default withRouter(SearchVideoList);
