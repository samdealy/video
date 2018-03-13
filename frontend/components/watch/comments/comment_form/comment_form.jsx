import React from 'react';
import { withRouter } from 'react-router-dom';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.updateBody = this.updateBody.bind(this);
    this.setRef = this.setRef.bind(this);
    this.state = this.props.comment;
  }

  componentWillMount() {
    document.addEventListener("mousedown", this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClick, false);
  }

  handleClick(e) {
    if (this.form.contains(e.target)) {
      this.setState({ hideShow: "show"});
      return;
    }
    this.handleClickOutside();
  }

  handleClickOutside() {
    this.setState({ hideShow: "hide" });
  }

  updateBody(e) {
    this.setState({body: e.target.value});
  }

  handleSubmit(e) {
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

  setRef(form) {
    this.form = form;
  }

  render () {
    const { formType, header, className, placeholder } = this.props;
    const cancelButton = formType === "Add" ? "" : this.cancelButton();
    const hideShow = this.state.hideShow || "hide";

    return (
      <div className={className}>
        <h4>{header}</h4>
        <form ref={this.setRef} onSubmit={this.handleSubmit} >
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
