import React from "react";
import SettingsAside from './settings_aside';
import SettingsForm from './settings_form';
import { withRouter, Redirect } from 'react-router-dom';

class SettingsPage extends React.Component {

  componentDidMount() {
    this.props.fetchVideo(this.props.videoId);
  }

  render() {
    const {
            videoTitle,
            videoTimeStamp,
            videoThumbUrl,
            videoDescription,
            editVideo,
            videoId,
            videoUploaderId,
            currentUserId
          } = this.props;

    if (videoUploaderId !== currentUserId && videoUploaderId !== null) {
      return(<Redirect to='/home'/>);
    }

    return (
      <div className="settings-page-container">
        <SettingsAside
          title={videoTitle}
          timeStamp={videoTimeStamp}
          thumbUrl={videoThumbUrl}
          videoId={videoId}
          />
        <SettingsForm
          videoTitle={videoTitle}
          videoDescription={videoDescription}
          videoId={videoId}
          editVideo={editVideo} />
      </div>

    );
  }
}

export default withRouter(SettingsPage);
