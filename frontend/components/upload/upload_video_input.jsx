import React from "react";
import { withRouter } from 'react-router-dom';

class UploadVideoInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      videoFile: null,
      thumbNailUrl: null
    };
    this.updateFile = this.updateFile.bind(this);
  }


  updateFile(e) {
    const { createVideo} = this.props;
    const videoFile = e.currentTarget.files[0];
    const videoData  = new FormData();
    videoData.append("video[clip]", videoFile);
    createVideo(videoData).then( action => {
      this.props.history.push(`${action.video.id}/settings`);
    });

  }

  render() {
    const { type } = this.props;
    const inputText = type === 'first' ? "Choose File to Upload" : "Choose more files to upload";

    return (
      <div className="upload-page-button">
        <label className="upload-button" htmlFor="upload-input"><span>Choose file to upload</span></label>
        <input
          id="upload-input"
          className="upload-video-input"
          type="file"
          onChange={this.updateFile}
          style={{display: 'none'}}
          />
      </div>
    );
  }
}

export default withRouter(UploadVideoInput);
