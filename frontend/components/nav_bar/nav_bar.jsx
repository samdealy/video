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
    const userIcon = <img src="images/Dealy_Headshot_MLS.jpg"></img>
    return(
      <div className="nav-bar">
        <LeftNavBar className="left-nav-section" loggedIn={loggedIn} />
        <ul className="right-nav-section">
          <li><input placeholder="Search for videos..."></input></li>
          <li>{userIcon}</li>
          <li><Link to="/upload">Upload</Link></li>
        </ul>
      </div>
    )
  }


}

export default NavBar;
