export const DISPLAY_SHORT_LINK = "DISPLAY_SHORT_LINK";

export const displayShortLink = (link) => ({
  type: DISPLAY_SHORT_LINK,
  payload: { link },
});
