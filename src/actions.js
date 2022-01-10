export const ADD_NEW_LINK = "ADD_NEW_LINK";

export const addNewLink = (link) => ({
  type: ADD_NEW_LINK,
  payload: { link },
});

export const UPDATE_MESSAGE = "UPDATE_MESSAGE";

export const updateMessage = (link) => ({
  type: UPDATE_MESSAGE,
  payload: { link },
});
