json.set! :videos do
  @videos.each do |vid|
    json.set! vid.id do
      json.partial! 'api/videos/video_info', video: vid
    end
  end
end
