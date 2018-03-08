import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import BackgroundVideo from '../video_players/background_video';

export default ({ src }) => {

  return(
    <div className="welcome-content">
      <BackgroundVideo src={src} type="video/mp4" />
      <div className="welcome-text-container">
        <h1>Where videos come first</h1>
        <div id="join-large-button-container">
          <Link to='/join'><span id="join-button-large">Join free</span></Link>
        </div>
      </div>
    </div>
  );


};
