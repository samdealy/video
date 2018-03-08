import React from "react";
import { Link } from 'react-router-dom'

export default ({ currentUser, loggedIn }) => {
  let userIcon;
  if (loggedIn) {
    debugger
    userIcon =
      <div className="avatar-wrapper">
        <img src={currentUser.image_url} alt="current-user-avatar"></img>
      </div>;
  }

  return(
    <ul className="right-nav-section">
      <li><input id="search-bar" placeholder="Search for videos..."></input></li>
      <li>{userIcon}</li>
      <li id="upload-button">
        <Link to="/upload" id="upload-button-link">
          <i className="fas fa-cloud-upload-alt"></i>
          <span>Upload</span>
        </Link>
      </li>
    </ul>
  )
}
