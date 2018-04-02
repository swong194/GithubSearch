import { RECEIVE_LOADING, REMOVE_LOADING } from "../actions/loadingActions";

const uiReducer = (state = { loading: false }, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_LOADING:
      newState.loading = true;
      return newState;
    case REMOVE_LOADING:
      newState.loading = false;
      return newState;
    default:
      return state;
  }
};

export default uiReducer;
