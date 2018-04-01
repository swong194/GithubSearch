import { RECEIVE_PAGE } from "../actions/pageActions";

const pageReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_PAGE:
      if (
        newState[action.userId] === undefined ||
        newState[action.userId] < action.page
      ) {
        newState[action.userId] = action.page;
      }
      return newState;
    default:
      return state;
  }
};

export default pageReducer;
