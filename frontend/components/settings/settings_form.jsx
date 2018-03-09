import React from 'react';

export default class SettingsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.videoInfo;
  }

  render() {
    return(
      <div>I am the settingsform</div>
    );
  }
}
