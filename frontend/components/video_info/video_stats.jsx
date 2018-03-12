import React from "react";
import { likeIcon, commentIcon, viewIcon } from "./video_stat_icons"

export default ({ views, likes, comments }) => {
  return(
    <ul className="video-stats">
      <li className="views">
        {viewIcon}
        <span>{views}</span>
      </li>
      <li className="likes">
        {likeIcon}
        {likes}
      </li>
      <li className="comments">
        {commentIcon}
        {comments}
      </li>
    </ul>
  )
}
