json.extract! video, :id, :uploader_id, :title, :description, :views
json.clip_url video_path(video.clip.url)
json.thumb_url image_path(video.clip.url(:thumb))
