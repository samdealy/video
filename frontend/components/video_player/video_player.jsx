import React from 'react';
import ControlBar from './control_bar';
import LikeButtonContainer from './like_button/like_button_container';

class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: 0,
      showHide: "show",
      hasStarted: false,
      hasEnded: false,
    };
    this.getDuration = this.getDuration.bind(this);
    this.stopInterval = this.stopInterval.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.handleEnd = this.handleEnd.bind(this);
    this.toggleShow = this.toggleShow.bind(this);
    this.toggleHide = this.toggleHide.bind(this);
    this.updateViews = this.updateViews.bind(this);
  }

  componentDidMount() {
    const { type } = this.props;
    
    if (type === 'watch-player') {
      this.props.fetchVideo(this.props.videoId);
    }
  }

  //Progress bar methods
  getDuration(e) {
    this.duration = e.target.duration;
  }

  toggleShow() {
    this.setState({ showHide: "show" });
  }

  toggleHide() {
    let nextShowHide;
    if (this.state.hasStarted === false) nextShowHide = "show";
    else nextShowHide = "hide";
    this.setState({ showHide: nextShowHide});
  }

  handlePlay(e) {
    if (!this.state.hasStarted) this.setState({ hasStarted: true, currentTime: 0});
    this.intervalId = setInterval( ()=> {
      this.setState({ currentTime: this.state.currentTime + 0.01 });
    }, 10);
  }

  stopInterval() {
    clearInterval(this.intervalId);
  }

  handleEnd() {
    this.stopInterval();
    this.updateViews();
    this.setState({ currentTime: 0 });
  }

  updateViews() {
    const { videoId, increaseViews} = this.props;
    increaseViews(videoId);
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
                 onPlay={this.handlePlay}
                 onPause={this.stopInterval}
                 onEnded={this.handleEnd} />
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
