import React from 'react';
import { connect } from 'react-redux';
import { clearVideos } from '../../actions/video_actions';
import ProfileHeaderContainer from './profile_header/profile_header_container';
import VideoList from '../video_list/video_list';
import FollowButtonContainer from '../buttons/follow_button_container';

const mapDispatchToProps = dispatch => {
  return ({ clearVideos: () => dispatch(clearVideos()) })
}

class Profile extends React.Component {
  componentWillUnmount() {
    this.props.clearVideos();
  }

  componentDidMount() {
    const { userId, fetchProfileVideos } = this.props;
    fetchProfileVideos(userId);
    window.scrollTo(0,0);
  }

  componentWillReceiveProps(nextProps) {
    const  nextUserId = nextProps.match.params.userId ;
    const { fetchProfileVideos } = this.props;

    if(this.props.match.params.userId !== nextUserId) {
      fetchProfileVideos(nextUserId);
    }
  }

  render() {
    const { userId, videos, match, action} = this.props;
    return (
      <section className="profile-page">
        <div className='profile-nav'>
          <FollowButtonContainer userId={userId} />
        </div>
        <ProfileHeaderContainer />
        <VideoList videos={videos} match={match} action={action}/>
      </section>
    )
  }
}

export default connect(null, mapDispatchToProps)(Profile);
