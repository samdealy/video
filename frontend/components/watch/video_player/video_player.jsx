import React from 'react';
import ControlBar from './control_bar';

class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: 0,
      showHide: "show",
      hasStarted: false
    };
    this.getDuration = this.getDuration.bind(this);
    this.getCurrentTime = this.getCurrentTime.bind(this);
    this.updateHasStarted = this.updateHasStarted.bind(this);
    this.toggleShow = this.toggleShow.bind(this);
    this.toggleHide = this.toggleHide.bind(this);
  }

  componentDidMount() {
    this.props.fetchVideo(this.props.videoId);
  }

  //Progress bar methods
  getDuration(e) {
    this.duration = e.target.duration;
  }

  getCurrentTime(e) {
    this.setState({ currentTime: e.target.currentTime });
  }

  //Show and hide the controls methods
  toggleShow() {
    this.setState({ showHide: "show" });
  }

  toggleHide() {
    let nextShowHide;
    if (this.state.hasStarted === false) nextShowHide = "show";
    else nextShowHide = "hide";
    this.setState({ showHide: nextShowHide});
  }

  updateHasStarted(e) {
    if (!this.state.hasStarted) this.setState({ hasStarted: true});
  }

  render() {
    const { videoClipUrl, clipType, hasStarted } = this.props;
    return(
      <div className="video-player-background">
        <figure className="video-player-size-container"
                onMouseEnter={this.toggleShow}
                onMouseLeave={this.toggleHide}>
          <video src={videoClipUrl}
                 width="100%"
                 ref={ videoEl => this.videoEl = videoEl}
                 onLoadedMetadata={this.getDuration}
                 onTimeUpdate={this.getCurrentTime}
                 onPlay={this.updateHasStarted} />
          <ControlBar videoEl={this.videoEl}
                      duration={this.duration}
                      currentTime={this.state.currentTime}
                      showHide={this.state.showHide} />
        </figure>
      </div>
    );
  }
}

export default VideoPlayer;
