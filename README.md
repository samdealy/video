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
<p align="center">
  <img width="400px" height="400px" src='./app/assets/images/read_me/feed_intro.png' />
</p>
The feed displays one of two collections of videos at a time: followed users' videos, and the user's own videos. The collection of followed videos displays multiples of three videos at a time, and a "load more videos" button loads three more videos until the user
contains no more new followed videos.
<p align="center">
  <img width="400px" height="400px" src='./app/assets/images/read_me/load_more_button.png' />
</p>

This pagination scheme does not use an external gem; rather, it relies on a custom-designed interaction between the front end's redux store, and the backends videos controller.

When the feed page first mounts or when the user clicks "load more videos", the front end dispatches a "requestFeedVideos" AJAX request that contains the requested page number as a parameter.

```javascript
// frontend/util/video_api_util.js
export const fetchFeedVideos = pageNumber => (
  $.ajax({
    method: 'GET',
    url: `/api/videos/feed/${pageNumber}`
  })
);
```
In the backend, the `pageNumber` is multiplied by `FEED_VIDEO_COUNT` (which is set to 3) to determine how many videos to send back in its response. The videos are then sorted by time of upload (a video's id number corresponds to upload time). Take note of the `@number_of_feed_videos` instance variable!

```ruby
# app/controllers/api/videos_controller.rb
def feed_index
  current_user_feed_videos = current_user.followed_videos
  @number_of_feed_videos = current_user_feed_videos.length

  slice_idx = params[:request_counter].to_i * FEED_VIDEO_COUNT
  @videos = current_user_feed_videos.sort_by{|vid| -1 * vid.id}[0...slice_idx]

  if @videos
    render "api/videos/feed"
  else
    render json: { users: {}, videos: {} }
  end
end
```

Now, the most difficult part of this feature is having the front end video list component know that there are no more feed videos, and it should therefore no longer display a "Load More Videos" button, but display a "That's all folks!" message instead.
At first, I tried to rely solely on my front end by checking to see how many videos were in the previous render and compare them to the incoming number of videos. But this approach didn't work because you could navigate away from the feed page, navigate back, and trigger the truth condition-- the number of videos on the previous render was, say, 6 and when you navigated back it was still 6, so the component would not render the load button.

To solve this, I sent up the `@number_of_feed_videos` through my `api/videos/feed` jbuilder to the frontend. I created a feed reducer that listens for a `RECEIVE_FEED_VIDEOS` action, and updates both the `nextFeedPage` and `numberOfFeedVideos` parameters. Now, in my `video_list` component, the logic is quite simple.

```javascript
// frontend/components/video_list/video_list.jsx
componentWillReceiveProps(nextProps) {
  const { numberOfFeedVideos }  = this.props;
  if (nextProps.videos.length === numberOfFeedVideos) {
    this.setState({ noMoreVideosText: true });
  }
}
```
<p align="center">
  <img width="400px" height="400px" src='./app/assets/images/read_me/no_more.png' />
</p>


#### Custom Video Player
