import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import rootReducer from "../reducers/rootReducer";

const configureStore = ({ preLoadedState }) => {
  return createStore(
    rootReducer,
    preLoadedState,
    applyMiddleware(thunk, logger)
  );
};

export default configureStore;
