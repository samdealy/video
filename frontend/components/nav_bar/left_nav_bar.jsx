import React from "react";
import { Link } from 'react-router-dom'

export default ({ loggedIn }) => {
  let element2, element3;

  if (loggedIn) {
    element2 = <Link to='/home/myvideos'><span>My Videos</span></Link>
    element3 = ''
  } else  {
    element2 = <Link to='/join'><span>Join</span></Link>
    element3 =
      <li>
        <Link to='/log_in'><span>Log in</span></Link>
      </li>
  }

  return(
    <ul>
      <li>
        <Link to='/'><h2>Video</h2></Link>
      </li>
      <li>{element2}</li>
      {element3}
    </ul>
  )
}
