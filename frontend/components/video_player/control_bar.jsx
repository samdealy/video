import React from 'react';
import PlayPauseButton from './control_features/play_pause_button';
import ProgressBar from './control_features/progress_bar';
import Fullscreen from './control_features/fullscreen';

class ControlBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showHide: this.props.showHide
    };
    this.handlePlayPause = this.handlePlayPause.bind(this);
  }

  handlePlayPause() {
    const { videoEl } = this.props;
    if (videoEl.paused || videoEl.ended) videoEl.play();
    else videoEl.pause();
  }

  render() {
    const { videoEl, duration, currentTime, showHide } = this.props;

    return(
      <div className={showHide} id="video-controls" >
         <div>
           <PlayPauseButton videoEl={videoEl}
             currentTime={currentTime} />
         </div>
         <div className="playbar">
           <ProgressBar videoEl={videoEl}
                        duration={duration}
                        currentTime={currentTime} />
           <li id="volume-slider">
             <div id="vol1" />
             <div id="vol2" />
             <div id="vol3" />
             <div id="vol4" />
             <div id="vol5" />
           </li>
         </div>
      </div>

    );
  }
}

export default ControlBar;
