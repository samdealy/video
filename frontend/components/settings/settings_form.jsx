import React from 'react';

export default class SettingsForm extends React.Component {
  constructor(props) {
    super(props);
    const { videoTitle, videoDescription } = this.props;
    this.state = {
      title: videoTitle,
      description: videoDescription,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(inputType) {
    return (e) => this.setState({ [inputType]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault()
    const { videoId } = this.props;
    const video = Object.assign(this.state, {id: videoId });
    this.props.editVideo(video);
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.title !== nextProps.videoTitle) {
      this.setState({
        title: nextProps.videoTitle,
        description: nextProps.videoDescription
      });
    }
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit} className="settings-form">
        <h3 className="page-header">Settings</h3>

        <label htmlFor="settings-title">Title</label>
        <p>
          Videos are more interesting when they have creative titles.
          We know you can do better than "My Video"
        </p>
        <input className="settings-input" onChange={this.handleChange("title")}
               id="settings-title"
               type="text"
               value={this.state.title}/>

        <label htmlFor="settings-description">Description</label>
        <p>
          Tell the story behind your video, and how you
          were involved in making it. (No HTML, but links are OK.)
        </p>
        <textarea className="settings-input" onChange={this.handleChange("description")}
                  id="settings-description"
                  value={this.state.description}>{this.state.description}</textarea>
        <input className="upload-button" type="submit" value="Save" />
      </form>
    );
  }
}
