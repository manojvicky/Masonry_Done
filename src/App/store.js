import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import app from "./reducer";
const logger = store => next => action => {
  console.group(action.type);
  console.log("%c Prev State", "color: orange", store.getState());
  console.log("%c Action", "color: blue", action);
  next(action);
  console.log("%c Next State", "color: green", store.getState());
  console.groupEnd(action.type);
};
const middleWares = [thunk, logger];

const store = createStore(app, applyMiddleware(...middleWares));
export default store;
