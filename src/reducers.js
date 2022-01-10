import { ADD_NEW_LINK, UPDATE_MESSAGE } from "./actions";

const initialState = [];

export const links = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_NEW_LINK: {
      const { link } = payload;

      return state.concat(link);
    }
    default:
      return state;
  }
};

export const message = (state = null, action) => {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_MESSAGE: {
      const { link } = payload;

      return String(link.ok);
    }
    default:
      return state;
  }
};
