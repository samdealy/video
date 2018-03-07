import React from "react";
import { Link } from 'react-router-dom'

export default ({ currentUser }) => {
  const userIcon = <img src={currentUser.image_url}></img>;

  return(
    <ul className="right-nav-section">
      <li><input placeholder="Search for videos..."></input></li>
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
