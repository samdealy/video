import React from 'react';
import { connect } from 'react-redux';
import { clearVideos } from '../../actions/video_actions';

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
        <h1>Hello from profile</h1>
      </section>
    )
  }
}

export default connect(null, mapDispatchToProps)(Profile);
