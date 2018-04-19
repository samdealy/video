json.set! :videos do
  @videos.each do |vid|
    json.set! vid.id do
      json.partial! "api/videos/video_info", video: vid
    end
  end
end

all_users = @videos.map{ |vid| vid.uploader } + @users
json.set! :users do
  all_users.each do |user|
    json.set! user.id do
      json.partial! "api/users/user", user: user
    end
  end
end
