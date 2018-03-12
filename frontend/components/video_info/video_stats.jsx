import React from "react";
import { likeIcon, commentIcon, playIcon } from "./video_stat_icons"
export default ({ plays, likes, comments }) => {
  return(
    <ul className="video-stats">
      <li className="plays">
        {playIcon}
        {plays}
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
