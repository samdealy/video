export const monthDay = (dateString) => {
  const month = dateString.slice(0,3);
  const day   = dateString.slice(4).split(',')[0];
  return { month, day };
};
