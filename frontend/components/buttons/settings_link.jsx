import React from 'react';
import { Link } from 'react-router-dom';

export default ({ videoId }) => {
  return(
    <Link className="settings-link" to={`/${videoId}/settings`}>
      <i className="fas fa-cog"></i>
      <span>Settings</span>
    </Link>
  );
}
