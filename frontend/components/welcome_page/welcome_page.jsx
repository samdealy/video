import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import StaticVideo from '../video_players/static_video';

export default (props) => {
  
  return(
    <div className="welcome-content">
      <StaticVideo src={welcomeVideo} idName="welcome-video" type="video/mp4" />
      <h1>Where videos come first</h1>
    </div>
  );


};
