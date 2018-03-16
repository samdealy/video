class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      create_follows
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:email, :password, :username)
  end

  def create_follows
    User.all.each do |user|
      Following.create({
        follower_id: current_user.id, leader_id: user.id
      })
    end
  end
  
end
