json.extract! comment, :id, :user_id, :video_id, :body
json.partial! "util/time", timestamp: comment.created_at
