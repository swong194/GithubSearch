import axios from "axios";

const GithubUsersApi = "https://api.github.com/users/";
const perPageQuery = "?per_page=20&page=";

export const fetchProfile = username => {
  return axios.get(`${GithubUsersApi + username}`);
};

export const fetchFollowers = (username, page) => {
  return axios.get(`${GithubUsersApi + username + perPageQuery + page}`);
};
