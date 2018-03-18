import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';

const mapStateToProps = state => {
  return { guestUser: { email: "guest.com",
    username: "Sweet Guest", password: "123456" }
  }
}

const mapDispatchToProps = dispatch => {
  return { login: (user) => dispatch(login(user)) }
}

class DemoLoginButton extends React.Component {

  render() {
    const { guestUser, login } = this.props;
    return(
      <button className="demo-login-button"
        onClick={() => login(guestUser)} >Demo Login</button>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DemoLoginButton);
