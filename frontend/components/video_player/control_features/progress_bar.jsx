
import React from "react";

export default class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      progressBar: null,
      progressBarContainer: null
    };
    this.setProgressBar = this.setProgressBar.bind(this);
    this.setProgressBarContainer = this.setProgressBarContainer.bind(this);
    this.skipAhead = this.skipAhead.bind(this);
  }

  setProgressBar(progressBar) {
    this.setState({ progressBar });
  }

  setProgressBarContainer(progressBarContainer) {
    this.setState({ progressBarContainer });
  }

  skipAhead(e) {
    const { videoEl } = this.props;
    if (videoEl.ended || videoEl.paused) videoEl.play();
    videoEl.pause();
    const newWidth = this.calculateNewWidth(e.pageX);
    videoEl.currentTime = newWidth * videoEl.duration;
    this.setState({ width: newWidth })
    videoEl.play();
  }

  calculateNewWidth(cursorPosition) {
    const { progressBar, progressBarContainer } = this.state;
    const progressBarLeftPosition = progressBar.getBoundingClientRect().left
    const totalWidth = progressBarContainer.offsetWidth;
    return (cursorPosition  - progressBarLeftPosition) / totalWidth;
  }

  componentWillReceiveProps(nextProps) {
    const { currentTime, duration } = this.props;
    const newWidth = Math.floor((currentTime / duration) * 100) + '%';
    this.setState({ width: newWidth });
  }

  render() {
    const { duration, videoEl } = this.props;
    return(
      <div className="progress-bar-container"
        ref={this.setProgressBarContainer} onClick={this.skipAhead} >
        <progress id="progress-bar" value="0" min="0"
          ref={this.setProgressBar}
          style={this.state} max={this.duration} >
        </progress>
      </div>
    );
  }
}
