json.set! :videos do
  @videos.each do |vid|
    json.set! vid.id do
      json.partial! 'api/videos/video_info', video: vid
    end
  end
end

json.set! :user do
  json.set! @user.id do
    json.partial! "api/users/user", user: @user
  end
end
