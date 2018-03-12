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
  render() {
    const { iconUrl, comment, formType,
            header, className, placeholder, action } = this.props;
    return(
      <div className="create-comment-section">
        <img className="user-icon" src={iconUrl}></img>
        <CommentForm comment={comment} formType={formType} header={header}
            className={className} placeholder={placeholder} action={action} />
      </div>);
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateCommentFormContainer));
