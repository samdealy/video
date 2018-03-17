import datejs from "datejs";

export const monthDay = (timeStamp) => {
  const dateTime = new Date(timeStamp);
  const locale   = "en-us";
  const month    = dateTime.toLocaleString(locale, {month: "short"});
  const day      = dateTime.getDate();
  return { month, day };
};

export const fullDate = (milliseconds) => {
  const dateTime = new Date(milliseconds)
  return dateTime.toString("MMM d, yyyy, h:mm tt")
}
