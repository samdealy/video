class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if @user
      login(@user)
      #TODO make sure that this view renders the correct info for the
      # feed
      render "api/users/show"
    else
      render json: ["Invalid username/password combination"], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      #TODO figure out where you want to render, probably the sign in page,
      # perhaps the root?
      render "api/users/show"
    else
      render json: ["Nobody signed in"], status: 404
    end
  end
end
