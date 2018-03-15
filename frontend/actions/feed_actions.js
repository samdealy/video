export const INCREMENT_FEED_PAGE = "INCREMENT_FEED_PAGE";
export const RESET_FEED_PAGE = "RESET_FEED_PAGE";

export const incrementFeedPage = () => {
  return({
    type: INCREMENT_FEED_PAGE
  });
};

export const resetFeedPage = () => {
  return({
    type: RESET_FEED_PAGE
  });
};
