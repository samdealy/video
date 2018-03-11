import React from 'react';


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
    return(
      <ul id="video-controls" className="controls">
         <li>
           <div id="playpause"
             ref={(playPause) => { this.playPause = playPause; }}
             onClick={this.handlePlayPause}>
           </div>
         </li>
         <li className="progress">
            <progress id="progress" value="0" min="0">
               <span id="progress-bar"></span>
            </progress>
         </li>
         <li><button id="mute" type="button">Mute/Unmute</button></li>
         <li>
           <div id="vol1" />
           <div id="vol2" />
           <div id="vol3" />
           <div id="vol4" />
           <div id="vol5" />
         </li>
         <li><button id="fs" type="button">Fullscreen</button></li>
      </ul>

    );
  }
}

export default ControlBar;
