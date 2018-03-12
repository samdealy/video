import React from "react";

export default class FollowButton extends React.Component {
  render() {

    return(
      <button className="follow-button">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M18 11h-5V6a1 1 0 1 0-2 0v5H6a1 1 0 0 0 0 2h5v5a1 1 0 0 0 2 0v-5h5a1 1 0 0 0 0-2z" fill="#1a2e3b"></path>
        </svg>
        <span>Follow</span>
      </button>
    );
  }
}
