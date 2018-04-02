import { combineReducers } from "redux";
import entitiesReducer from "./entitiesReducer";
import errorsReducer from "./errorsReducer";
import uiReducer from "./uiReducer";

export default combineReducers({
  entities: entitiesReducer,
  errors: errorsReducer,
  ui: uiReducer
});
