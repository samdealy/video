import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import LeftNavBar from './left_nav_bar'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { loggedIn } = this.props

    return(
      <div className="nav-bar">
        <LeftNavBar className="left-nav-section" loggedIn={loggedIn} />
        <ul className="right-nav-section">
          <li>Search bar goes here</li>
          <li>profile pic</li>
          <li>Upload Link</li>
        </ul>


      </div>
    )
  }


}

export default NavBar;
