import React from 'react';

export default class SettingsForm extends React.Component {
  constructor(props) {
    super(props);
    const { video } = this.props;
    this.state = {
      title: video.title || '',
      description: video.description || '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(inputType) {
    return (e) => this.setState({ [inputType]: e.target.value });
  }

  handleSubmit(e) {
    this.props.editVideo(this.state);
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.title !== nextProps.video.title) {
      const description = nextProps.video.description || '';
      this.setState({ title: nextProps.video.title, description });
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
                <input>
      </form>
    );
  }
}
