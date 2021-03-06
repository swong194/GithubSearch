import { RECEIVE_ERRORS, REMOVE_ERRORS } from "../actions/errorActions";

const errorsReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_ERRORS:
      return action.errors;
    case REMOVE_ERRORS:
      return [];
    default:
      return state;
  }
};

export default errorsReducer;
