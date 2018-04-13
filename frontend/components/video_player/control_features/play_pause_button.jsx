import React from "react";
import { pauseIcon, playIcon } from './play_pause_icons';
import { withRouter } from 'react-router-dom';

class PlayPauseButton extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      icon: playIcon,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleEnd   = this.handleEnd.bind(this);
    this.setRef      = this.setRef.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { videoEl } = nextProps;
    if (videoEl.ended || videoEl.paused) {
      this.setState({ icon: playIcon })
    } else {
      this.setState({ icon: pauseIcon })
    }
  }

  setRef(playpause) {
    this.playPause = playpause;
  }

  handleClick() {
    const { videoEl, toggleShowHide, currentTime } = this.props;
    if(this.props.match.path === '/user/:userId') return;
    if (videoEl.paused || videoEl.ended) videoEl.play();
    else videoEl.pause();

    const nextIcon = ((videoEl.paused) || (videoEl.ended)) ? playIcon : pauseIcon;
    this.setState({ icon: nextIcon });
  }

  handleEnd() {
    this.setState({ icon: playIcon })
  }

  render() {

    return(
      <button id="playpause" ref={this.setRef} onClick={this.handleClick}>
        <div className="pp-icon-wrapper">{this.state.icon}</div>
      </button>
    );
  }
}

export default withRouter(PlayPauseButton);
