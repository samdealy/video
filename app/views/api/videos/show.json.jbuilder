json.set! :video do
  json.partial! "api/videos/video", video: @video
end

json.set! :user do
  json.partial! "api/users/user", user: @video.uploader
end

json.set! :comments do
  json.partial! "api/comments/index", comments: @video.comments
end
