import React from "react";
import UploadVideoInput from './upload_video_input';

export default (props) => {
  return(
    <div className="upload-page">
      <h1>Upload your videos</h1>
      <div className="upload-content-container">
        <aside className="video-upload-rules">
          <h1>Only upload videos that:</h1>
          <ol>
            <li> You have the right to upload.</li>
            <li> are allowed on Video.</li>
          </ol>
        </aside>
        <div className="upload-button-wrapper">
          <div className="upload-button-container">
            <i className="fas fa-cloud-upload-alt"/>
            <UploadVideoInput type="first" />
          </div>
        </div>
      </div>

    </div>);
};
