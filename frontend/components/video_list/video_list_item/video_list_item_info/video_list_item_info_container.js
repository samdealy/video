import React from "react";
import { connect } from 'react-redux';
import VideoListItemInfo from "./video_list_item_info";
import { getUser } from '../../../../reducers/selectors';

const mapStateToProps = (state, { video }) => {
  const currentVideo = video || {};
  const title        = currentVideo.title || "";
  const description  = currentVideo.description || "";
  const timeStamp    = currentVideo.timestamp || "";
  const videoId      = currentVideo.id || "";

  const uploader     = getUser(state, currentVideo.uploader_id) || {};
  const uploaderId   = uploader.id || "";
  const userName     = uploader.username || "";
  const iconUrl      = uploader.image_url || "";

  return ({ title, description, timeStamp,
    videoId, userName, uploaderId, iconUrl });
};

export default connect(mapStateToProps, null)(VideoListItemInfo);
