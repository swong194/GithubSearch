import { connect } from "react-redux";
import Followers from "./Followers";
import {
  selectFollowers,
  selectPage,
  selectProfile
} from "../../selectors/profileSelector";
import { fetchFollowers } from "../../actions/githubActions";
import { receivePage } from "../../actions/pageActions";

const mapStateToProps = (state, ownProps) => {
  const followers = selectFollowers(state, ownProps);
  const { page, nextPage, maxPage } = selectPage(state, ownProps);
  const { id, login } = selectProfile(state, ownProps);
  return {
    followers,
    page,
    nextPage,
    id,
    login,
    maxPage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchFollowers: (userId, username, page) =>
      dispatch(fetchFollowers(userId, username, page)),
    receivePage: (userId, page) => dispatch(receivePage(userId, page))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Followers);
