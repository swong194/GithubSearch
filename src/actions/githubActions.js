import * as GithubAPIUtil from "../utils/GithubAPIUtil";
import { receiveErrors } from "./errorActions";

export const RECEIVE_PROFILE = "RECEIVE_PROFILE";

export const receiveProfile = profile => {
  return {
    type: RECEIVE_PROFILE,
    profile
  };
};

export const fetchProfile = username => {
  return GithubAPIUtil.fetchProfile(username).then(
    profile => receiveProfile(profile),
    error => receiveErrors(error)
  );
};
