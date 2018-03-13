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
    this.setState({body: e.target.value});
  }

  handleSubmit(e) {
    const { handleClickOutside } = this.props;
    e.preventDefault();
    this.props.action(this.state).then( () => {
      this.handleClickOutside();
      this.setState({ body: '' });
    });
  }

  cancelButton() {
    return(<button onClick={(e) => e.stopPropagation()}
          className="comment-cancel-button">Cancel</button>);
  }

  render () {
    const { formType, header, className, placeholder, setRef } = this.props;
    const cancelButton = formType === "Add" ? "" : this.cancelButton();
    const hideShow = this.props.hideShow || "hide";

    return (
      <div className={className}>
        <h4>{header}</h4>
        <form ref={setRef} onSubmit={this.handleSubmit} >
            <textarea
              value={this.state.body}
              onChange={this.updateBody}
              placeholder={placeholder}/>
            <div className={`comment-form-buttons ${hideShow}`}>
              <input className="comment-submit"
                     type="submit" value={`${formType} comment`} />
              {cancelButton}
            </div>
        </form>
      </div>
    );
  }
}

export default withRouter(CommentForm);