export const monthDay = (dateString) => {
  const dateTime = new Date();
  const locale   = "en-us";
  const month    = dateTime.toLocaleString(locale, {month: "short"});
  const day      = dateTime.getDate();
  return { month, day };
};
