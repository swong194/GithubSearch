import * as GithubAPIUtil from "../utils/GithubAPIUtil";
import { receiveErrors } from "./errorActions";

export const RECEIVE_PROFILE = "RECEIVE_PROFILE";

export const receiveProfile = profile => {
  return {
    type: RECEIVE_PROFILE,
    profile
  };
};

export const fetchProfile = username => dispatch => {
  return GithubAPIUtil.fetchProfile(username).then(
    profile => dispatch(receiveProfile(profile.data)),
    errors => dispatch(receiveErrors([errors.response.request.statusText]))
  );
};
