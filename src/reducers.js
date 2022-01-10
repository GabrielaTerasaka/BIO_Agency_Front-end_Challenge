import { DISPLAY_SHORT_LINK } from "./actions";

const initialState = { link: "", hasLink: false };

export const shorterLink = (state = initialState, action) => {
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
