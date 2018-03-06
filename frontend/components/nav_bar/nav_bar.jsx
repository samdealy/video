import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {

  }

  render() {
    const leftSectionType= this.props.match.params
    return(
      <div className="nav-bar">
        <LeftNavBar className="left-nav-section" type={leftSectionType} />
        <section>
        
        </section>


      </div>
    )
  }


}
