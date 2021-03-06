import React from "react";
import { withRouter, Link } from 'react-router-dom';
import UploadButton from '../buttons/upload_button';
import SearchBarContainer from '../search_bar/search_bar_container';

class RightNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showHideDropdown: "hidden"
    };
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  toggleDropdown() {
    let css;
    if (this.props.loggedIn) {
      css = (this.state.showHideDropdown === "hidden") ? "show" : "hidden";
    } else {
      css = "hidden";
    }
    this.setState({ "showHideDropdown":css });
  }

  handleLogOut() {
    this.setState({ showHideDropdown: "hidden" });
    this.props.logout().then(this.props.history.push('/'));
  }

  render() {
    const { currentUser, currentUserId, loggedIn, logout, history } = this.props;
    let userIcon;
    if (loggedIn) {
      userIcon = <img className="user-icon" src={currentUser.image_url} alt="current-user-avatar"></img>;
    }

    let hoverOverIcon = false;
    return(
      <ul className="right-nav-section">
        <SearchBarContainer />
        <li className="avatar-li" >
          <Link to={`/user/${currentUserId}`}>
          <div className="hover-container" onMouseEnter={this.toggleDropdown} onMouseLeave={this.toggleDropdown}>
            <div className="avatar-wrapper">{userIcon}</div>
            <div className={`icon-dropdown ${this.state.showHideDropdown}`}>
              <div className="dropdown-user-info-wrapper">
                <div className="dropdown-user-info">
                  {userIcon}
                  <div className="view-profile-wrapper">
                    <h4>{currentUser.username}</h4>
                    <span>View profile</span>
                  </div>
                </div>
              </div>
              <ul>
                <li onClick={this.handleLogOut}>Log out</li>
              </ul>
            </div>
          </div>
          </Link>
        </li>
        <li>
          <UploadButton text={"Upload"} />
        </li>
      </ul>
    );
  }
}

export default withRouter(RightNavBar);
