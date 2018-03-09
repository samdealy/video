import React from "react";
import SettingsAside from './settings_aside';
import SettingsForm from './settings_form';


export default class SettingsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state.video = this.props.video;
  }

  render() {
    return (
      <div>
        settings page
        <SettingsAside videoInfo={"nothing for now"} />
        <SettingsForm  videoInfo={"nothing for now"} />
      </div>

    )
  }
}
