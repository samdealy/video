class Api::FollowingsController < ApplicationController
  before_action :require_logged_in

  def create
    following = Following.new(following_params)
    following.follower_id = current_user.id
    if following.save!
      @users   = [following.follower, following.leader]
      render 'api/users/users'
    else
      render json: following.errors.full_messages, status: 422
    end
  end

  def destroy
    following = Following.find(params[:id])
    if following_is_destroyable?(following)
      following.destroy
      @users = [following.follower, following.leader]
      render 'api/users/users'
    elsif following && !(following_is_destroyable?(following))
      render json: {error: ["Can't edit another users follows"]}, status: 403
    else
      render json: {error: ["Can't find follower / followed user"]}, status: 404
    end
  end

  private
  def following_params
    params.require(:following).permit(:leader_id)
  end

  def following_is_destroyable?(following)
    follower_id, leader_id = following.follower_id, following.leader_id
    following && (follower_id == current_user.id || leader_id == current_user.id)
  end

end
