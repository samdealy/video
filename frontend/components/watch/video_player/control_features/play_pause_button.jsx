import React from "react";
export default class PlayPauseButton extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      icon: this.playIcon(),
    };
    this.handleClick = this.handleClick.bind(this);
    this.setRef = this.setRef.bind(this);
    this.playIcon = this.playIcon.bind(this);
    this.pauseIcon = this.pauseIcon.bind(this);
  }

  setRef(playpause) {
    this.playPause = playpause;
  }

  handleClick() {
    const { videoEl, toggleShowHide } = this.props;
    if (videoEl.paused || videoEl.ended) videoEl.play();
    else videoEl.pause();

    const nextIcon = videoEl.paused ? this.playIcon() : this.pauseIcon();
    this.setState({ icon: nextIcon });
  }

  pauseIcon() {
    return(
      <svg viewBox="0 0 20 20" preserveAspectRatio="xMidYMid" tabIndex="-1">
        <rect className="fill" width="6" height="20" x="0" y="0"></rect>
        <rect className="fill" width="6" height="20" x="12" y="0"></rect>
      </svg>);
  }

  playIcon() {
    return(
      <svg viewBox="0 0 20 20" preserveAspectRatio="xMidYMid" tabIndex="-1">
        <polygon className="fill" points="1,0 20,10 1,20"></polygon>
      </svg>
    );
  }

  render() {
    return(
      <button id="playpause" ref={this.setRef} onClick={this.handleClick}>
        <div className="pp-icon-wrapper">{this.state.icon}</div>
      </button>
    );
  }
}
