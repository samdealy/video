export const createVideo = video => (
  $.ajax({
    method: 'POST',
    url: 'api/videos',
    data: { video }
  })
);

export const editVideo = video => (
  $.ajax({
    method: 'PATCH',
    url: `api/videos/${video.id}`,
    data: { video }
  })
);
