import React from "react";
import UploadVideoInputContainer from './upload_video_input_container';

export default (props) => {
  return(
    <div className="upload-page">
      <h1 className="page-header">Upload your videos</h1>
      <div className="upload-content-container">
        <aside className="video-upload-rules">
          <h3 className="medium-header">Only upload videos that:</h3>
          <ol>
            <li> You have the right to upload.</li>
            <li> Are allowed on Video.</li>
          </ol>
        </aside>
        <div className="upload-button-container">
          <i className="fas fa-cloud-upload-alt"/>
          <UploadVideoInputContainer />
        </div>
      </div>

    </div>);
};
