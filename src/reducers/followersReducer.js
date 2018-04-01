import { RECEIVE_FOLLOWERS } from "../actions/githubActions";

const followersReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_FOLLOWERS:
      if (!newState[action.userId]) {
        newState[action.userId] = action.followers;
      } else {
        newState[action.userId] = newState[action.userId].concat(
          action.followers
        );
      }
      return newState;
    default:
      return state;
  }
};

export default followersReducer;
