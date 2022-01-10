export const ADD_NEW_LINK = "ADD_NEW_LINK";

export const addNewLink = (link) => ({
  type: ADD_NEW_LINK,
  payload: { link },
});
