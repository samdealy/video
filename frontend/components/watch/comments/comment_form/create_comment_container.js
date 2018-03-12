import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CommentForm from './comment_form';
import { createComment } from '../../../../actions/comment_actions';

const mapStateToProps = (state,{ match }) => {
  const comment   = { body: '',
                     video_id: match.params.videoId || '',
                     user_id: state.session.currentUserId };
  const formType  = 'Add';
  const header    = 'Add a new comment';
  const className = "new-comment-form";
  return { comment, formType, header, className };
};

const mapDispatchToProps = (dispatch) => {
  return {
    action: comment => dispatch(createComment(comment))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentForm));
