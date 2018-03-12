class Api::CommentsController < ApplicationController
  before_action :require_logged_in

  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id
    if @comment.save!
      render 'api/videos/show'
    else
        render json: @comment.errors.full_messages, status: 422
    end
  end

  def update
    @comment = current_user.comments.find(params[:id])
    if @comment && @comment.update_attributes(video_params)
      render "api/videos/show"
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    comment = Comment.find(params[:id])
    if comment && comment.user_id == current_user.id
      tweet.destroy
      render "api/videos/show"
    elsif comment && comment.user_id != current_user.id
      render json: {error: ["Can't delete another users comment"]}, status: 403
    else
      render json: {error: ["Can't find comment"]}, status: 404
    end
  end

  private
  def comment_params
    params.require(:comment).permite(:body, :video_id, :parent_comment_id)
  end
end
