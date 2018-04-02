import * as GithubAPIUtil from "../utils/GithubAPIUtil";
import { receiveErrors } from "./errorActions";
import { receiveLoading, removeLoading } from "./loadingActions";

export const RECEIVE_PROFILE = "RECEIVE_PROFILE";
export const RECEIVE_FOLLOWERS = "RECEIVE_FOLLOWERS";

export const receiveProfile = profile => {
  return {
    type: RECEIVE_PROFILE,
    profile
  };
};

export const fetchProfile = username => dispatch => {
  return GithubAPIUtil.fetchProfile(username).then(
    profile => {
      dispatch(receiveProfile(profile.data));
      return profile.data;
    },
    errors => dispatch(receiveErrors([errors.response.request.statusText]))
  );
};

export const receiveFollowers = (userId, followers) => {
  return {
    type: RECEIVE_FOLLOWERS,
    followers,
    userId
  };
};

export const fetchFollowers = (userId, username, page) => dispatch => {
  dispatch(receiveLoading());
  return GithubAPIUtil.fetchFollowers(username, page).then(
    followers => {
      dispatch(removeLoading());
      dispatch(receiveFollowers(userId, followers.data));
      return followers.data;
    },
    errors => {
      dispatch(removeLoading());
      dispatch(receiveErrors([errors.response.request.statusText]));
    }
  );
};
