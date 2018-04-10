import React from 'react';
import { connect } from 'react-redux';
import { clearVideos } from '../../actions/video_actions';
import ProfileHeaderContainer from './profile_header/profile_header_container';

const mapDispatchToProps = dispatch => {
  return ({ clearVideos: () => dispatch(clearVideos()) })
}

class Profile extends React.Component {
  componentWillUnmount() {
    debugger
    this.props.clearVideos();
  }

  render() {
    return (
      <section className="profile-page">
        <div className='profile-nav'></div>
        <ProfileHeaderContainer />
      </section>
    )
  }
}

export default connect(null, mapDispatchToProps)(Profile);
