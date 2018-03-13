json.extract! user, :id, :username, :email
json.image_url asset_path(user.image.url)
json.video_ids user.videos.map{|vid| vid.id}

follower_ids = user.followers.each_with_object({}) do |follower, hash|
   hash[follower.id] = true
end

json.follower_ids follower_ids

leader_ids = user.leaders.each_with_object({}) do |leader, hash|
  hash[leader.id] = true
end

json.leader_ids leader_ids
