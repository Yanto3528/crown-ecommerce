import { applyMiddleware, createStore } from "redux";
import rootReducer from "./root-reducer";
import logger from "redux-logger";

import { composeWithDevTools } from "redux-devtools-extension";

const middlewares = [logger];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
