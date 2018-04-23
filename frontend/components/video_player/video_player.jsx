import React from 'react';
import { withRouter } from 'react-router-dom';
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
      duration: 0
    };

    this.getDuration  = this.getDuration.bind(this);
    this.handlePause  = this.handlePause.bind(this);
    this.handlePlay   = this.handlePlay.bind(this);
    this.handleEnd    = this.handleEnd.bind(this);
    this.toggleShow   = this.toggleShow.bind(this);
    this.toggleHide   = this.toggleHide.bind(this);
    this.updateViews  = this.updateViews.bind(this);
    this.handleClick  = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { match } = this.props;
    if (match.path === '/watch/:videoId') {
      this.props.fetchVideo(this.props.videoId);
    }
  }

  getDuration(e) {
    this.setState({ duration: e.target.duration });
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

  handlePause() {
    clearInterval(this.intervalId);
    this.setState({ currentTime: this.videoEl.currentTime })
  }

  handleEnd() {
    this.handlePause();
    this.updateViews();
    this.setState({ currentTime: 0 });
  }

  handleClick() {
    const { videoId, match } = this.props;
    debugger
    if(match.path === '/user/:userId' || match.path === '/search/video/:prefix')  {
      this.props.history.push(`/watch/${videoId}`);
    }
  }
  updateViews() {
    const { videoId, increaseViews} = this.props;
    increaseViews(videoId).then;
  }

  render() {
    const { videoClipUrl, clipType, hasStarted} = this.props;

    return(
      <div className="video-player-background" onClick={this.handleClick}>
        <figure className="video-player-size-container"
                onMouseEnter={this.toggleShow}
                onMouseLeave={this.toggleHide}>
          <video src={videoClipUrl}
                 width="100%"
                 ref={ videoEl => this.videoEl = videoEl}
                 onLoadedMetadata={this.getDuration}
                 onPlay={this.handlePlay}
                 onPause={this.handlePause}
                 onEnded={this.handleEnd} />
          <ControlBar videoEl={this.videoEl}
                      duration={this.state.duration}
                      currentTime={this.state.currentTime}
                      showHide={this.state.showHide} />
        </figure>
      </div>
    );
  }
}

export default withRouter(VideoPlayer);
