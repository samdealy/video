import React from "react";

export default class PlayPauseButton extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.setRef = this.setRef.bind(this);
  }

  setRef(playpause) {
    this.playPause = playpause;
  }

  handleClick() {
    const { videoEl } = this.props;
    if (videoEl.paused || videoEl.ended) videoEl.play();
    else videoEl.pause();
  }

  render() {
    return(
      <button id="playpause" ref={this.setRef} onClick={this.handleClick}>
        helo
      </button>
    );
  }
}
