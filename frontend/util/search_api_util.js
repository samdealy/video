export const fetchSearch = prefix => {
  return $.ajax({
    method: "GET",
    url:'api/search',
    data: { prefix }
  });
};
