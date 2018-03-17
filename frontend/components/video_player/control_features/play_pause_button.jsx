import React from "react";
import { pauseIcon, playIcon } from './play_pause_icons';

export default class PlayPauseButton extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      icon: playIcon,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleEnd   = this.handleEnd.bind(this);
    this.setRef      = this.setRef.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.videoEl.ended) {
      this.setState({ icon: playIcon })
    }
  }

  setRef(playpause) {
    this.playPause = playpause;
  }

  handleClick() {
    const { videoEl, toggleShowHide, currentTime } = this.props;
    if (videoEl.paused || videoEl.ended) videoEl.play();
    else videoEl.pause();

    const nextIcon = ((videoEl.paused) || (videoEl.ended)) ? playIcon : pauseIcon;
    this.setState({ icon: nextIcon });
  }

  handleEnd() {
    this.setState({ icon: playIcon })
  }

  render() {

    return(
      <button id="playpause" ref={this.setRef} onClick={this.handleClick}>
        <div className="pp-icon-wrapper">{this.state.icon}</div>
      </button>
    );
  }
}
