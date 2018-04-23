import React from "react";
import { followHtml, followingHtml, unfollowHtml } from './follow_button_inner_html';

export default class FollowButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    };
  }

  determineHtml() {
    const { alreadyFollows } = this.props;
    if (alreadyFollows && this.state.hover) {
      return unfollowHtml;
    } else if (alreadyFollows) {
     return followingHtml;
    } else {
     return followHtml;
    }
  }

  render() {
    const { userId, follow, unfollow,
            alreadyFollows, classState } = this.props;
    const buttonInnerHtml = this.determineHtml();
    const action = alreadyFollows ? unfollow : follow;
    return(
      <button className={`follow-button ${classState}`}onClick={() => action(userId)}
              onMouseEnter={() => this.setState({ hover: true  })}
              onMouseLeave={() => this.setState({ hover: false })}>
        {buttonInnerHtml}
      </button>
    );
  }
}
