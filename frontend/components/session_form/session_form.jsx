import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link, Redirect } from 'react-router-dom';


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
      <ul className="session-errors">
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
      linkText,
      nameHidden,
      nameClass
    } = this.props;

    const submitTitle = formHeader == "Join" ? "Join" : "Log in";

    let firstInput='';
    if (formHeader === "Join") {
      firstInput = <input type="text"
        placeholder="First and last name"
        value={this.state.username}
        onChange={this.update('username')}
        className={nameClass}
      />;
    }

    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <h3><span>{formHeader} Video</span></h3>
          <div className="login-form">
              {firstInput}
              <input type="text"
                placeholder="Email address"
                value={this.state.email}
                onChange={this.update('email')}
                className="login-input"
              />
              <input type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            {this.renderErrors()}
            <input className="session-submit" type="submit" value={`${submitTitle} with email`} />
            <br/>
            {linkTitle}<Link to={`/${linkPath}`}>{linkText}</Link>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
