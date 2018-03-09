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
        <h3 className="medium-header">Basic</h3>

        <label htmlFor="settings-title">Title</label>
        <input onChange={this.handleChange("title")}
               id="settings-title"
               type="text"
               value={this.state.title}/>

        <label htmlFor="settings-description">Description</label>
        <textarea onChange={this.handleChange("description")}
                  id="settings-description"
                  value={this.state.description}>{this.state.description}</textarea>
        <input type="submit" />
      </form>
    );
  }
}
