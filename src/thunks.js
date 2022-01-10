import { addNewLink, updateMessage } from "./actions";

export const getLink = (link) => async (dispatch) => {
  try {
    const response = await fetch(
      `https://api.shrtco.de/v2/shorten?url=${link}`
    );
    const newLink = await response.json();
    if (newLink.ok === true) {
      dispatch(addNewLink(newLink));
      dispatch(updateMessage(newLink));
    } else {
      dispatch(updateMessage(newLink));
    }
  } catch (e) {
    console.log(e);
  }
};
