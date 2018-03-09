import React from "react";
import SettingsAside from './settings_aside';
import SettingsForm from './settings_form';
import { withRouter } from 'react-router-dom';

class SettingsPage extends React.Component {

  componentDidMount() {
    this.props.fetchVideo(this.props.videoId);
  }

  render() {
    const { video, editVideo } = this.props;
    return (
      <div className="settings-page-container">
        settings page
        <SettingsAside video={video} />
        <SettingsForm  video={video} editVideo={editVideo} />
      </div>

    );
  }
}

export default withRouter(SettingsPage);
