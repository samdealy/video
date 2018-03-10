import React from 'react';

class VideoPlayer extends React.Component {
  componentDidMount() {
    this.props.fetchVideo(this.props.videoId);
  }

  render() {
    const { videoClipUrl, clipType } = this.props;
    // const videoClipUrl =
    //    "http://s3.amazonaws.com/fsp-video-dev/videos/clips/000/000/050/original/grass_hopper.mp4?1520721819"
    // const clipType = "video/mp4"
    return(
      <div className="video-player-background">
        <div className="video-player-size-container">
          <video src={videoClipUrl} width="100%" />
        </div>
      </div>
    );
  }
}

export default VideoPlayer;
