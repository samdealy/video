export const createVideo = video => {
  return $.ajax({
    method: 'POST',
    url: '/api/videos',
    processData: false,
    contentType: false,
    dataType: 'json',
    data: video
  });
};

export const fetchVideo = videoId => {
  return $.ajax({
    url: `api/videos/${videoId}`,
  });
};

export const editVideo = video => (
  $.ajax({
    method: 'PATCH',
    url: `api/videos/${video.id}`,
    data: { video }
  })
);

export const increaseViews = videoId => (
  $.ajax({
    method: 'PATCH',
    url: `api/videos/${videoId}/views`
  })
);

export const fetchFeedVideos = requestCounter => (
  $.ajax({
    method: 'GET',
    url: `/api/videos/feed/${requestCounter}`
  })
);

export const fetchMyVideos = () => (
  $.ajax({
    method: 'GET',
    url: `/api/videos/myvideos`
  })
);
