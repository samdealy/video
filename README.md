<p align="center">
  <img src='./app/assets/images/video_readme_logo.png' />
</p>

***

Video is an online video platform where users can upload, edit, and watch videos on a custom-built
HTML5 video player. User experience centers on the feed feature, which displays videos from followed accounts.

[Live Site](https://a-video.herokuapp.com/#/)

## Technology
Video is a single-page-application that utilizes a Rails v5.1.5 back end (connected to a PostgreSQL database)
and a React-Redux v.5.6.0 front end. Video and thumbnail upload is handled by the Paperclip gem,
which in turn uses the Paperclip Transcoder gem to transcode videos using the powerful FFMPEG audio-visual transcoder.
Uploaded videos, background videos, and user icons, are stored on the cloud via Amazon Web Services' S3.

## Features
With a strong emphasis on not relying on external code sources,
Video implements the core features of an online video provider (OVP). It handles back end and front end authentication,
without the use of external libraries. Its upload feature allows users to view video thumbnails and add descriptions and titles.
Its "home-rolled" feed and custom video player are distinguishing features.

#### Feed
The feed displays one of two collections of videos at a time: followed users' videos, and the user's own videos. The collection of followed videos displays multiples of three videos at a time, and a "load more videos" button loads three more videos until the user
contains no more new followed videos.

This pagination scheme does not use an external gem; rather, it relies on a custom-designed interaction between the front end's redux store, and the backends videos controller.

When the feed page first mounts or when the user clicks "load more videos", the front end dispatches a "requestFeedVideos" AJAX request that contains the requested page number as a parameter. The page number will be used by the backend to determine how many videos to send back.
```javascript
//frontend/util/video_api_util.js
export const fetchFeedVideos = pageNumber => (
  $.ajax({
    method: 'GET',
    url: `/api/videos/feed/${pageNumber}`
  })
);
```
#### Custom Video Player
