import { connect } from "react-redux";
import Search from "./Search";
import { receivePage } from "../../actions/pageActions";
import { fetchProfile } from "../../actions/githubActions";

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProfile: username => dispatch(fetchProfile(username)),
    receivePage: (userId, page) => dispatch(receivePage(userId, page))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
