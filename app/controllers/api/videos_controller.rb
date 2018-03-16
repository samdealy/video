class Api::VideosController < ApplicationController
  before_action :require_logged_in

  FEED_VIDEO_COUNT = 3

  def create
    @video = Video.new(video_params)
    @video.uploader_id = current_user.id
    @video.title = @video.clip_file_name.split('.').first
    if @video.save!
      render "api/videos/show"
    else
      render json: @video.errors.full_messages, status: 422
    end
  end

  def show
    @video = Video.find(params[:id])
    render "api/videos/show"
  end

  def update
    @video = current_user.videos.find(params[:id])
    if @video && @video.update_attributes(video_params)
      render "api/videos/show"
    else
      render json: @video.errors.full_messages, status: 422
    end
  end

  def increase_views
    @video = Video.find(params[:id])
    if @video
      @video.views += 1
      @video.save!
      render "api/videos/show"
    else
      render json: @video.errors.full_messages, status: 422
    end
  end

  def feed_index
    @slice_factor= params[:request_counter].to_i * FEED_VIDEO_COUNT
    current_user_feed_videos = current_user.followed_videos
    @number_of_feed_videos = current_user_feed_videos.length
    @videos = current_user_feed_videos.sort_by{|vid| -1 * vid.id}[0...@slice_factor]

    if @videos
      render "api/videos/feed"
    else
      render json: { users: {}, videos: {} }
    end
  end

  def my_videos_index
    @videos = current_user.videos
    render "api/videos/my_videos"
  end

  private
  def video_params
    params.require(:video).permit(:clip, :title, :description, :views)
  end
end
