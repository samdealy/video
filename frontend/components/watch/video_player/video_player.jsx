import React from 'react';
import ControlBar from './control_bar'

class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchVideo(this.props.videoId);
  }

  render() {
    const { videoClipUrl, clipType } = this.props;
    return(
      <div className="video-player-background">
        <figure className="video-player-size-container">
          <video src={videoClipUrl}
                 width="100%"
                 ref={ videoEl => this.videoEl = videoEl} />
           <ControlBar videoEl={this.videoEl} />
        </figure>
      </div>
    );
  }
}

export default VideoPlayer;
