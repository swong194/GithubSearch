import { combineReducers } from "redux";
import profileReducer from "./profileReducer.js";
import pageReducer from "./pageReducer.js";
import followersReducer from "./followersReducer.js";

export default combineReducers({
  profiles: profileReducer,
  pages: pageReducer,
  followers: followersReducer
});
