import { combineReducers } from "redux";
import entitiesReducer from "./entitiesReducer";
import errorsReducer from "./errorsReducer";

export default combineReducers({
  entities: entitiesReducer,
  errors: errorsReducer
});
