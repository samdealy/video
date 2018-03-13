import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CommentForm from './comment_form';
import { editComment } from '../../../../actions/comment_actions';
import { getCurrentUser, getComment } from '../../../../reducers/selectors';

const mapStateToProps = (state, { match, commentId, cancel, hideEditForm }) => {
  const comment = getComment(state, commentId);
  return({
    comment,
    formType: "Edit",
    header: "",
    className: "edit-comment-section",
    placeholder: comment.body,
    hideEditForm: hideEditForm
  });
};

const mapDispatchToProps = dispatch => {
  return {
    action: comment => dispatch(editComment(comment))
  };
};

class EditCommentFormContainer extends React.Component {

  setRef() {
    return;
  }

  render() {
    const { comment, action, formType, header,
            className, placeholder, hideEditForm} = this.props;
    return(
      <CommentForm comment={comment} action={action} formType={formType} header={header}
                  className={className} placeholder={placeholder}
                  setRef={this.setRef} hideEditForm={hideEditForm}/>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditCommentFormContainer))
