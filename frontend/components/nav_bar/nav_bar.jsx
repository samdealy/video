import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import LeftNavBar from './left_nav_bar';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { loggedIn } = this.props;
    const userIcon = <img src={this.props.currentUser.image_url}></img>;

    return(
      <div className="nav-bar">
        <Link to='/'><h2>Video</h2></Link>
        <LeftNavBar  loggedIn={loggedIn} />
        <ul className="right-nav-section">
          <li><input placeholder="Search for videos..."></input></li>
          <li>{userIcon}</li>
          <li><Link to="/upload"><span>Upload</span></Link></li>
        </ul>
      </div>
    );
  }


}

export default NavBar;
