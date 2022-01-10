import { DISPLAY_SHORT_LINK } from "./actions";

export const shorterLink = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case DISPLAY_SHORT_LINK: {
      const { link } = payload;

      return link;
    }
    default:
      return state;
  }
};
