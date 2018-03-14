import React from "react";

export default class VideoList extends React.Component {
  render() {
    const { videos, type } = this.props;
    return(
      <div >
        {type}
      </div>
    );
  }
}
