import React from 'react';
import { withRouter } from 'react-router-dom';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateBody = this.updateBody.bind(this);
    this.state = this.props.comment;
  }

  updateBody(e) {
    debugger
    this.setState({body: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state);
  }

  cancelButton() {
    return(<button className="comment-cancel-button">Cancel</button>);
  }

  render () {
    const { formType, header, className } = this.props;
    const cancelButton = formType === "Add" ? "" : this.cancelButton();

    return (
      <div className={className}>
        <h4>{header}</h4>
        <form onSubmit={this.handleSubmit}>
          <label>
            <textarea
              value={this.state.body}
              onChange={this.updateBody} />
          </label>
          <div className="comment-form-buttons">
            <input type="submit" value={`${formType} comment`} />
            {cancelButton}
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(CommentForm);
