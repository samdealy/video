json.set! :videos do
  @next_feed_videos.each do |vid|
    json.set! vid.id do
      json.partial! 'api/videos/video_info', video: vid
    end
  end
end

all_users = [current_user] + @next_feed_videos.map{ |vid| vid.uploader }

json.set! :users do
  all_users.each do |user|
    json.set! user.id do
      json.partial! "api/users/user", user: user
    end
  end
end

json.feed_video_ids @next_feed_videos.map{ |vid| vid.id }

json.number_of_feed_videos @number_of_feed_videos
