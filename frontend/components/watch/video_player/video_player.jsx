import React from 'react';
import ControlBar from './control_bar';

class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: 0
    };
    this.getDuration = this.getDuration.bind(this);
    this.getCurrentTime = this.getCurrentTime.bind(this);
  }

  componentDidMount() {
    this.props.fetchVideo(this.props.videoId);
  }

  getDuration(e) {
    this.duration = e.target.duration;
  }

  getCurrentTime(e) {
    this.setState({ currentTime: e.target.currentTime });
  }

  render() {
    const { videoClipUrl, clipType } = this.props;
    return(
      <div className="video-player-background">
        <figure className="video-player-size-container">
          <video src={videoClipUrl}
                 width="100%"
                 ref={ videoEl => this.videoEl = videoEl}
                 onLoadedMetadata={this.getDuration}
                 onTimeUpdate={this.getCurrentTime}/>
          <ControlBar videoEl={this.videoEl}
                      duration={this.duration}
                      currentTime={this.state.currentTime}/>
        </figure>
      </div>
    );
  }
}

export default VideoPlayer;
