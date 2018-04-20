
video_ids = []
json.set! :videos do
  @videos.each do |vid|
    video_ids << vid.id
    json.set! vid.id do
      json.partial! "api/videos/video_info", video: vid
    end
  end
end

json.video_ids video_ids

all_users = @videos.map{ |vid| vid.uploader } + @users

user_ids = []
json.set! :users do
  all_users.uniq.each do |user|
    user_ids << user.id
    json.set! user.id do
      json.partial! "api/users/user", user: user
    end
  end
end

json.user_ids user_ids
