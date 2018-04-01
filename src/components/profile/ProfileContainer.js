import { connect } from "react-redux";
import Profile from "./Profile";
import { selectProfile, selectPage } from "../../selectors/profileSelector";
import { fetchFollowers } from "../../actions/githubActions";
import { receivePage } from "../../actions/pageActions";

const mapStateToProps = (state, ownProps) => {
  const profile = selectProfile(state, ownProps);
  const { page, nextPage } = selectPage(state, ownProps);
  return {
    profile,
    page,
    nextPage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchFollowers: (username, page) =>
      dispatch(fetchFollowers(username, page)),
    receivePage: (userId, page) => dispatch(receivePage(userId, page))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
