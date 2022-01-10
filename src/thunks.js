import { displayShortLink } from "./actions";

export const getLink = (link) => async (dispatch) => {
  try {
    const response = await fetch(
      `https://api.shrtco.de/v2/shorten?url=${link}`
    );
    const newLink = await response.json();
    dispatch(displayShortLink(newLink));
  } catch (e) {
    console.log(e);
  }
};
