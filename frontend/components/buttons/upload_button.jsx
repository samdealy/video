import React from "react";
import { Link } from 'react-router-dom';

export default ({ text }) => {
  return(
    <Link className="upload-button" to="/upload" id="upload-button-link">
      <i className="fas fa-cloud-upload-alt"></i>
      <span>{text}</span>
    </Link>
  );
};
