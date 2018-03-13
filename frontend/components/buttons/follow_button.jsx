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
    const { uploaderId, follow, unfollow,
            alreadyFollows, classState } = this.props;
    const buttonInnerHtml = this.determineHtml();
    const action = alreadyFollows ? unfollow : follow;
    return(
      <button className={`follow-button ${classState}`}onClick={() => action(uploaderId)}
              onMouseEnter={() => this.setState({ hover: true  })}
              onMouseLeave={() => this.setState({ hover: false })}>
        {buttonInnerHtml}
      </button>
    );
  }
}
//
//
//   render() {
//     const { uploaderId, alreadyFollows, follow, unfollow } = this.props;
//     const buttonInnerHtml = alreadyFollows ? "Unfollow" : "Follow";
//     const action = alreadyFollows ? unfollow : follow;
//
//     return(
//       <button className="follow-button" onClick={() => action(uploaderId)}>
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//           <path d="M18 11h-5V6a1 1 0 1 0-2 0v5H6a1 1 0 0 0 0 2h5v5a1 1 0 0 0 2 0v-5h5a1 1 0 0 0 0-2z" fill="#1a2e3b"></path>
//         </svg>
//         <span>{text}</span>
//       </button>
//     );
//   }
// }
