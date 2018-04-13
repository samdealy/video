import React from "react";
import { connect } from 'react-redux';
import VideoListItemInfo from "./video_list_item_info";
import { getUser } from '../../../../reducers/selectors';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, { video, match }) => {
  const currentVideo = video || {};
  const pagePath     = match.path;
  const title        = currentVideo.title || "";
  const description  = currentVideo.description || "";
  const timeStamp    = currentVideo.timestamp || "";
  const videoId      = currentVideo.id || "";
  const viewCount    = video.views || '0';

  const uploader     = getUser(state, currentVideo.uploader_id) || {};
  const uploaderId   = uploader.id || "";
  const userName     = uploader.username || "";
  const iconUrl      = uploader.image_url || "";

  return ({ title, description, timeStamp,
    videoId, userName, uploaderId, iconUrl, pagePath, viewCount });
};

export default withRouter(connect(mapStateToProps, null)(VideoListItemInfo));
