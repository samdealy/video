import React from "react";
import { Link } from 'react-router-dom';

export default ({ iconUrl, userName, timeStamp }) => {
  return(
      <div>
        <Link to='/'>
          <img className="user-icon" src={iconUrl}></img>
        </Link>
        <span className="upload-icon"></span>
        <h6>Uploaded by</h6>
        <h6 className="aside-username">{userName}</h6>
      </div>
    );
}
