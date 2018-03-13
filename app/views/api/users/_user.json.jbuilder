json.extract! user, :id, :username, :email
json.image_url asset_path(user.image.url)
json.video_ids user.videos.map{|vid| vid.id}

json.follower_ids user.followers.map{ |follower| follower.id }
json.leader_ids user.leaders.map{ |leader| leader.id }
