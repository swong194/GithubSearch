import { RECEIVE_PROFILE } from "../actions/githubActions";

const profileReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_PROFILE:
      newState[action.profile.id] = action.profile;
      return newState;
    default:
      return state;
  }
};

export default profileReducer;
