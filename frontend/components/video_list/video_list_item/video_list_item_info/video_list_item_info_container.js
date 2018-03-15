import React from "react";
import { connect } from 'react-redux';
import VideoListItemInfo from "./video_list_item_info";
import { getUser } from '../../../../reducers/selectors';

const mapStateToProps = (state, { video }) => {

  const title = video.title || "";
  const description = video.description || "";
  const timeStamp   = video.timestamp || "";

  const uploader = getUser(state, video.uploader_id) || {};
  const userName = uploader.username || "";
  const iconUrl = uploader.icon_url || "";
  return ({ title, description, timeStamp, userName, iconUrl });
};

export default connect(mapStateToProps, null)(VideoListItemInfo);
