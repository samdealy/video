import React from "react";

export default ({ userName, iconUrl }) => {
  return(
    <li className="user-list-item">
      <img className="user-icon" src={iconUrl}></img>
      <h4>{userName}</h4>
    </li>
  );
};
