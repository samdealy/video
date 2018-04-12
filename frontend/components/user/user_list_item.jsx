import React from "react";
import { Link } from 'react-router-dom';

export default class UserListItem extends React.Component {

  render() {
    const { userName, iconUrl, uploaderId } = this.props;

    return(
      <li className="user-list-item">
        <Link to={`/user/${uploaderId}`}>
          <img className="user-icon" src={iconUrl}></img>
        </Link>
        <Link to={`/user/${uploaderId}`}>
          <h4>{userName}</h4>
        </Link>
      </li>
    );
  }
}
