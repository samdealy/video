class Api::VideosController < ApplicationController
  before_action :require_logged_in

  def create
    @video = Video.new(video_params)

    @video.uploader_id = current_user.id
    if @video.save
      render "api/videos/show"
    else

      render json: @video.errors.full_messages, status: 422
    end
  end

  def update
    @video = current_user.videos.find(params[:id])
    if @video && @video.update_attributes(video_params)
      render "api/videos/show"
    else

      render json: @video.errors.full_messages, status: 422
    end
  end


  private
  def video_params
    params.require(:video).permit(:clip, :title, :description, :views)
  end
end