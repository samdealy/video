import React from "react";

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
    createVideo(videoData);
  }

  render() {
    const { type } = this.props;
    const inputText = type === 'first' ? "Choose File to Upload" : "Choose more files to upload";

    return (
      <div>
        <label htmlFor="upload-input">Choose file to upload</label>
        <input
          id="upload-input"
          className="upload-video-input"
          type="file"
          onChange={this.updateFile}
          />
      </div>
    );
  }
}

export default UploadVideoInput;
