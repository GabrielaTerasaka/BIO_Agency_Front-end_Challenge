import { addNewLink } from "./actions";

export const getLink = (link) => async (dispatch) => {
  try {
    const response = await fetch(
      `https://api.shrtco.de/v2/shorten?url=${link}`
    );
    const newLink = await response.json();
    if (newLink.ok === true) {
      dispatch(addNewLink(newLink));
    }
  } catch (e) {
    console.log(e);
  }
};
