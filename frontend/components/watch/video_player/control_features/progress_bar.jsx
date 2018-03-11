import React from "react";

export default class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.setRef = this.setRef.bind(this);
    this.state = {
      width: 0
    };
  }

  setRef(progressBar) {
    this.progressBar = progressBar;
  }

  componentWillReceiveProps(nextProps) {
    const { currentTime, duration } = this.props;
    const newWidth = Math.floor((currentTime / duration) * 100) + '%';
    this.setState({ width: newWidth });
  }

  render() {
    const { duration } = this.props;
    // const width = this.getCurrentWidth();
    return(
      <div id="progress-bar-container">
        <progress id="progress-bar"
                  ref={this.setRef}
                  value="0"
                  min="0"
                  style={this.state}
                  max={this.duration}>
        </progress>
      </div>
    );
  }
}
