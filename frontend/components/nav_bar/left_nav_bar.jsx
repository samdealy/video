import React from "react";
import { Link } from 'react-router-dom'

export default ({ loggedIn }) => {
  let element2, element3;
  if (loggedIn) {
    element2 = <Link to='/home/myvideos'><span id="MyVideos">My Videos</span></Link>
    element3 = ''
  } else  {
    element2 = <Link to='/join'><span id="join-button">Join</span></Link>
    element3 =
      <li>
        <Link to='/log_in'><span id="login">Log in</span></Link>
      </li>
  }

  const logo = loggedIn ? logoBlue : logoWhite;

  return(
    <ul className="left-nav-section">
      <li><Link to='/'> <img src={logo}></img></Link></li>
      <li>{element2}</li>
      {element3}
    </ul>
  )
}
