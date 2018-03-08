class Api::VideosController < ApplicationController
  def create

    @video = Video.new(video_params)
    @video.uploader_id = current_user.id
    if @video && @video.save
      render "api/videos/show"
    else
      render json: ['Incorrect video info'], status: 422
    end
  end

  def edit
    @video = current_user.videos.find(params[:id])
    if @video.update_attributes(video_params)
      render "api/videos/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end


  private
  def video_params
    params.require(:video).permit(:title, :description)
  end
end
