import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CommentForm from './comment_form';
import { editComment } from '../../../../actions/comment_actions';
import { getCurrentUser } from '../../../../reducers/selectors';

const mapStateToProps = (state, { match }) => {

};

const mapDispatchToProps = dispatch => {
  return {
    action: comment => dispatch(editComment(comment))
  };
};

class EditCommentFormContainer extends React.Component {

  render() {
    return(<div>hello</div>)
  }
}

// const { comment, formType, className, placeholder, action } = this.props
// <CommentForm comment={comment} formType={formType} header
