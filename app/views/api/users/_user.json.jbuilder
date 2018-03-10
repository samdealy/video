json.extract! user, :id, :username, :email
json.image_url asset_path(user.image.url)
json.video_ids user.videos.map{|vid| vid.id}
