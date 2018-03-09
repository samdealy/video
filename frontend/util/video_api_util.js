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

export const editVideo = video => (
  $.ajax({
    method: 'PATCH',
    url: `api/videos/${video.id}`,
    data: { video }
  })
);