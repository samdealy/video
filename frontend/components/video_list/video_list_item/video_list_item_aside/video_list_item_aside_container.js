import React from "react";
import { connect } from 'react-redux';
import VideoListItemAside from "./video_list_item_aside";
import { getUser } from '../../../../reducers/selectors';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, { video }) => {

  const currentVideo = video || {};
  const title        = currentVideo.title || "";
  const timeStamp    = currentVideo.timestamp || "";
  const videoId      = currentVideo.id || "";

  const uploaderId   = currentVideo.uploader_id || ''
  const uploader     = getUser(state, currentVideo.uploader_id) || {};
  const userName     = uploader.username || "";
  const iconUrl      = uploader.image_url || "";

  return ({ timeStamp, userName, iconUrl, uploaderId });
};

export default withRouter(connect(mapStateToProps, null)(VideoListItemAside));
