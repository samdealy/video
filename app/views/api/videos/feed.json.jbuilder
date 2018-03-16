json.set! :videos do
  @videos.each do |vid|
    json.set! vid.id do
      json.partial! 'api/videos/video_info', video: vid
    end
  end
end

all_users = [current_user] + @videos.map{ |vid| vid.uploader }

json.set! :users do
  all_users.each do |user|
    json.set! user.id do
      json.partial! "api/users/user", user: user
      if user == current_user
        json.feed_video_ids @videos.map{ |vid| vid.id }
      end
    end
  end
end

json.number_of_feed_videos @number_of_feed_videos
