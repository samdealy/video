class Api::SearchController < ApplicationController
  def index
    @videos = Video.where("title LIKE ?", "%#{params[:prefix]}%" )
    @users  = User.where("username LIKE ?", "%#{params[:prefix]}%")
    if @videos || @users
      render 'api/search/index'
    else
      render json: ["Invalid search"], status: 401
    end
  end
end
