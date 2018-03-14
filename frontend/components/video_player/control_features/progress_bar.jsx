
import React from "react";

export default class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0
    };
    this.setRef = this.setRef.bind(this);
    this.skipAhead = this.skipAhead.bind(this);
  }

  setRef(progressBar) {
    this.progressBar = progressBar;
  }

  skipAhead(e) {
    const { videoEl } = this.props;
    const pos = (e.pageX  - this.progressBar.offsetLeft) / this.progressBar.offsetWidth;
    videoEl.currentTime = pos * videoEl.duration;
  }

  componentWillReceiveProps(nextProps) {
    const { currentTime, duration } = this.props;
    const newWidth = Math.floor((currentTime / duration) * 100) + '%';
    this.setState({ width: newWidth });
  }

  render() {
    const { duration } = this.props;
    return(
      <div className="progress-bar-container">
        <progress id="progress-bar"
                  ref={this.setRef}
                  value="0"
                  min="0"
                  style={this.state}
                  max={this.duration}
                  onClick={this.skipAhead}>
        </progress>
      </div>
    );
  }
}
