import React from 'react'
import VideoListItem from '../../video_list/video_list_item/video_list_item'
export default class SearchVideoList extends React.Component {

  render() {
    const { videos } = this.props;

    const videoListItems =  videos.map( (video, i) => {
      return <VideoListItem video={video} key={i}  />;
    });

    
    return(
      <ul className='search-list'>
        {videoListItems}
      </ul>
    )
  }
}
