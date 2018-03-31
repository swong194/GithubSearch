import axios from "axios";

const GithubUsersApi = "https://api.github.com/users/";

export const fetchProfile = username => {
  return axios.get(`${GithubUsersApi + username}`);
};
