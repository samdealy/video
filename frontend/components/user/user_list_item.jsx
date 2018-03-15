import React from "react";

export default class UserListItem extends React.Component {

  render() {
    const { userName, iconUrl } = this.props;

    return(
      <li className="user-list-item">
        <img className="user-icon" src={iconUrl}></img>
        <h4>{userName}</h4>
      </li>
    );
  }
}
