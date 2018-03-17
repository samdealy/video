import React from 'react';
import { Link } from 'react-router-dom';

export default ({ videoId }) => {
  return(
    <Link to='/videoId/settings'>
      <i class="fas fa-cog"></i>
      <span>Settings</span>
    </Link>
  );
}
