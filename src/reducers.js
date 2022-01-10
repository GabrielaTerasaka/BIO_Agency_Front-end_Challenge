import { ADD_NEW_LINK } from "./actions";

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
