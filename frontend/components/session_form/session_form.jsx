import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

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

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const {
      formHeader,
      linkPath,
      linkTitle,
      nameHidden,
      nameClass
    } = this.props;

    const submitTitle = formHeader == "Join" ? "Join" : "Log in";
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <h3>{formHeader} Vimeo</h3>
          <br/>
          <div className="login-form">
            <br/>
              <input type="text"
                placeholder="First and last name"
                value={this.state.username}
                onChange={this.update('username')}
                className={nameClass}
              />
              <input type="text"
                placeholder="Email address"
                value={this.state.email}
                onChange={this.update('email')}
                className="login-input"
              />
            <br/>
              <input type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            <br/>
            {this.renderErrors()}
            <input className="session-submit" type="submit" value={`${submitTitle} with Email`} />
            <br/>
            <Link to={`/${linkPath}`}>{linkTitle}</Link>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
