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

json.set! :users do
  all_users.uniq.each do |user|
    json.set! user.id do
      json.partial! "api/users/user", user: user
    end
  end
end

json.search_user_ids @users.map { |user| user.id }
