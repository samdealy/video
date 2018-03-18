<p align="center">
  <img src='./app/assets/images/video_readme_logo.png' />
</p>
***
Video is an online video platform where users can upload, edit, and watch videos on a custom-built
HTML5 video player. User experience centers on the feed feature, which displays videos from followed accounts.

[Live Site!](https://a-video.herokuapp.com/#/)

## Technology
Video is a single-page-application that utilizes a Rails v5.1.5 back end (connected to a PostgreSQL database)
and a React-Redux v.5.6.0 front end. Video and thumbnail upload is handled by the Paperclip gem,
which in turn uses the Paperclip Transcoder gem to transcode videos using the powerful FFMPEG audio-visual transcoder.
Uploaded videos, background videos, and user icons, are stored on the cloud via Amazon Web Services' S3.

## Features
With a strong emphasis on not relying on external code sources,
Video implements the core features of an online video provider (OVP). It handles back end and front end authentication,
without the use of external libraries. Its upload feature allows users to view video thumbnails and add descriptions and titles.
Its feed and custom video player are distinguishing features, and, again, are "home-rolled".

#### Feed

#### Custom Video Player
