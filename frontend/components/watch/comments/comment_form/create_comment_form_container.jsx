import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CommentForm from './comment_form';
import { createComment } from '../../../../actions/comment_actions';
import { getCurrentUser } from '../../../../reducers/selectors';

const mapStateToProps = (state, { match }) => {
  const comment     = { body: '',
                        video_id: match.params.videoId,
                        user_id: state.session.currentUserId };
  const formType    = 'Add';
  const header      = 'Add a new comment';
  const className   = "new-comment-form";
  const currentUser = getCurrentUser(state) || {};
  const iconUrl     = currentUser.image_url || "";
  const placeholder = "Add a comment";

  return { comment, formType, header, className, iconUrl, placeholder };
};

const mapDispatchToProps = (dispatch) => {
  return {
    action: comment => dispatch(createComment(comment))
  };
};

class CreateCommentFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hideShow: "hide"
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.setRef = this.setRef.bind(this);
  }

  setRef(form) {
    this.form = form;
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

  render() {
    const { iconUrl, comment, formType,
            header, className, placeholder, action } = this.props;
    return(
      <div className="create-comment-section">
        <img className="user-icon" src={iconUrl}></img>
        <CommentForm comment={comment} hideShow={this.state.hideShow}
                     formType={formType} header={header} className={className} placeholder={placeholder} action={action}
                     handleClickOutside={this.handleClickOutside} setRef={this.setRef}/>
      </div>);
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateCommentFormContainer));
