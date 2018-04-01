import * as GithubAPIUtil from "../utils/GithubAPIUtil";
import { receiveErrors } from "./errorActions";

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

export const receiveFollowers = followers => {
  return {
    type: RECEIVE_FOLLOWERS,
    followers
  };
};

export const fetchFollowers = (username, page) => dispatch => {
  return GithubAPIUtil.fetchFollowers(username, page).then(
    followers => {
      dispatch(receiveFollowers(followers));
      return followers;
    },
    errors => dispatch(receiveErrors([errors.response.request.statusText]))
  );
};
