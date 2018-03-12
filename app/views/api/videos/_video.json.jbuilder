json.extract! video,
  :id, :uploader_id, :title, :description, :views, :clip_content_type
json.clip_url video_path(video.clip.url)
json.thumb_url image_path(video.clip.url(:thumb))
json.partial! "util/time", timestamp: video.created_at
json.comment_ids video.comments.map{|com| com.id}
