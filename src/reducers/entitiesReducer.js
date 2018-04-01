import { combineReducers } from "redux";
import profileReducer from "./profileReducer.js";
import pageReducer from "./pageReducer.js";

export default combineReducers({
  profiles: profileReducer,
  pages: pageReducer
});
