import React from "react";

class UploadVideoInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      videoFile: null,
      thumbNailUrl: null
    };
  }

  updateFile(e) {
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () =>
    this.setState({ thumbNailUrl: reader.result, videoFile: file }, () =>{
      if (file) {
        this.props.uploadVideo(this.state.videoFile);
        this.setState({ thumbNailUrl: "", videoFile: null });
      }
    });


  }

  render() {
    const inputText = type === 'first' ? "Choose File to Upload" : "Choose more files to upload";

    return (
      <input className="upload-video-input" type="file" onChange={this.updateFile}>
        {inputText}
      </input>
    )
  }
}

export default UploadVideoButton;
