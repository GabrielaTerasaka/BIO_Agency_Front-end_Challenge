import { createStore, combineReducers, applyMiddleware } from "redux";
import { shorterLink } from "./reducers";
import thunk from "redux-thunk";

const reducers = { shorterLink };
const rootReducer = combineReducers(reducers);

export const configureStore = () =>
  createStore(rootReducer, applyMiddleware(thunk));
