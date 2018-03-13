json.partial! "api/videos/video", video: @video

# json.set! :video do
#   json.partial! "api/videos/video", video: @video
# end
#
# all_users = [@video.uploader] + @video.comments.map{|com| com.user }
#
# json.set! :users do
#   all_users.each do |user|
#     json.set! user.id do
#       json.partial! "api/users/user", user: user
#     end
#   end
# end
#
# json.set! :comments do
#   json.partial! "api/comments/index", comments: @video.comments
# end
