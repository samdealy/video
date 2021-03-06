import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link, Redirect } from 'react-router-dom';
import BackgroundVideo from '../background_videos/background_video';
import DemoLoginContainer from './demo_login_container.jsx';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.props.clearErrors();
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.clearErrors();
    this.props.processForm(user).then( () => <Redirect to='/home' />);
  }

  renderErrors() {
    return(
      <ul className="session-errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  demoLoginButton() {
    return(
      <button className="demo-login" onClick={this.demoLogin}>
        Demo Login</button>
    );
  }

  render() {
    const { formHeader, linkPath, linkTitle,
            linkText, nameHidden, nameClass, src } = this.props;

    const submitTitle = formHeader == "Join" ? "Join" : "Log in";

    let firstInput='';
    if (formHeader === "Join") {
      firstInput =
        <input type="text" placeholder="First and last name"
          value={this.state.username} onChange={this.update('username')}
          className={nameClass} />;
    }

    return (
      <div className="session-page-container">
        <BackgroundVideo src={src} type="video/mp4" />
        <div className="login-form-container">
          <form onSubmit={this.handleSubmit} className="login-form">
            <h3><span>{formHeader} Video</span></h3>
            <div className="">
                {firstInput}
                <input type="text" placeholder="Email address"
                  value={this.state.email} onChange={this.update('email')}
                  className="login-input" />
                <input type="password" placeholder="Password"
                  value={this.state.password} onChange={this.update('password')}
                  className="login-input" />
              {this.renderErrors()}
              <input className="session-submit" type="submit" value={`${submitTitle} with email`} />
              <br/>
            </div>
          </form>
          <DemoLoginContainer />
          <div className="form-footer">
            <span id="link-title">{linkTitle}</span>
            <Link to={`/${linkPath}`}>{linkText}</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
