import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import LeftNavBar from './left_nav_bar';
import RightNavBar from './right_nav_bar';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { loggedIn, currentUser } = this.props;

    return(
      <div className="nav-bar">
        <LeftNavBar  loggedIn={loggedIn} />
        <RightNavBar loggedIn={loggedIn} currentUser={currentUser} />
      </div>
    );
  }


}

export default NavBar;
