import React from "react";
import { withRouter, Link } from 'react-router-dom';

class RightNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showHideDropdown: "hidden"
    };
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  toggleDropdown() {
    let css = (this.state.showHideDropdown === "hidden") ? "show" : "hidden";
    this.setState({"showHideDropdown":css});
  }

  render() {
    const { currentUser, loggedIn, logout, history } = this.props;
    let userIcon;
    if (loggedIn) {
      userIcon = <img src={currentUser.image_url} alt="current-user-avatar"></img>;
    }

    let hoverOverIcon = false;
    return(
      <ul className="right-nav-section">
        <li id="search-bar-wrapper">
          <input id="search-bar" placeholder="Search for videos..."></input>
          <i className="fas fa-search"></i>
        </li>
        <li className="avatar-li" onMouseEnter={this.toggleDropdown}>
          <div className="avatar-wrapper">
            {userIcon}
          </div>
        </li>
        <div className={`icon-dropdown ${this.state.showHideDropdown}`}
             onMouseLeave={this.toggleDropdown}>
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
            <li>
              <button onClick={() => logout()}>Log out</button>
            </li>
          </ul>
        </div>

        <li className="upload-button">
          <Link to="/upload" id="upload-button-link">
            <i className="fas fa-cloud-upload-alt"></i>
            <span>Upload</span>
          </Link>
        </li>
      </ul>
    );
  }
}

export default withRouter(RightNavBar);



// const RightNavBar = ({ currentUser, loggedIn, logout, history }) => {
//   let userIcon;
//   if (loggedIn) {
//     userIcon = <img src={currentUser.image_url} alt="current-user-avatar"></img>
//   }
//
//   let hoverOverIcon = false
//   return(
//     <ul className="right-nav-section">
//       <li id="search-bar-wrapper">
//         <input id="search-bar" placeholder="Search for videos..."></input>
//         <i className="fas fa-search"></i>
//       </li>
//       <li className="avatar-li">
//         <div className="avatar-wrapper">
//           {userIcon}
//         </div>
//       </li>
//       <div className="icon-dropdown">
//         <div className="dropdown-user-info-wrapper">
//           <div className="dropdown-user-info">
//           {userIcon}
//           <div className="view-profile-wrapper">
//             <h4>{currentUser.username}</h4>
//             <span>View profile</span>
//           </div>
//         </div>
//         </div>
//         <ul>
//           <li>
//             <button onClick={() => logout()}>Log out</button>
//           </li>
//         </ul>
//       </div>
//
//       <li className="upload-button">
//         <Link to="/upload" id="upload-button-link">
//           <i className="fas fa-cloud-upload-alt"></i>
//           <span>Upload</span>
//         </Link>
//       </li>
//     </ul>
//   )
// }
//
// export default withRouter(RightNavBar);
