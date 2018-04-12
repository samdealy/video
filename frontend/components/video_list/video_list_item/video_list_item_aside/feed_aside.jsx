import React from "react";
import { Link } from 'react-router-dom';

export default ({ iconUrl, userName, timeStamp, uploaderId }) => {
  return(
      <div>
        <Link to={`/user/${uploaderId}`}>
          <img className="user-icon" src={iconUrl}></img>
        </Link>
        <span className="action-icon"></span>
        <h6 className="action">Uploaded by</h6>
        <Link to={`/user/${uploaderId}`}>
          <h6 className="aside-username">{userName}</h6>
        </Link>
      </div>
    );
}
