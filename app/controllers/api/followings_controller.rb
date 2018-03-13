class Api::FollowingsController < ApplicationController
  before_action :require_logged_in

  def create
    following = Following.new(leader_id: params[:leader_id])
    following.follower_id = current_user.id
    if following.save!
      @users   = [following.follower, following.leader]
      render 'api/users/index'
    else
      render json: following.errors.full_messages, status: 422
    end
  end

  def destroy
    following = params[:unfollow] ? following_as_follower : following_as_leader
    if following
      following.destroy
      @users = [following.follower, following.leader]
      render 'api/users/index'
    else
      render json: {error: ["Can't find follower / followed user"]}, status: 404
    end
  end

  private
  def following_as_follower
    current_user.followings_as_follower.find_by(leader_id: params[:id])
  end

  def following_as_leader
    current_user.followings_as_leader.find_by(follower_id: params[:id])
  end
end
