import React from 'react';
import PlayPauseButton from './control_features/play_pause_button';
import ProgressBar from './control_features/progress_bar';

class ControlBar extends React.Component {

  constructor(props) {
    super(props);
    this.handlePlayPause = this.handlePlayPause.bind(this);
  }

  handlePlayPause() {
    const { videoEl } = this.props;
    if (videoEl.paused || videoEl.ended) videoEl.play();
    else videoEl.pause();
  }

  render() {
    const { videoEl, duration, currentTime } = this.props;
    return(
      <div id="video-controls">
         <div><PlayPauseButton videoEl={videoEl}/></div>
         <div className="playbar">
           <ProgressBar videoEl={videoEl}
                        duration={duration}
                        currentTime={currentTime} />
         </div>
         <li id="volume-slider">
           <div id="vol1" />
           <div id="vol2" />
           <div id="vol3" />
           <div id="vol4" />
           <div id="vol5" />
         </li>
         <li><button id="fs" type="button">Fullscreen</button></li>
      </div>

    );
  }
}

export default ControlBar;