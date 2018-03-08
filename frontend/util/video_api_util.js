export const createVideo = video => (
  $.ajax({
    method: 'POST',
    url: 'api/videos',
    data: { video }
  })
);
