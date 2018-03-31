import { connect } from "react-redux";
import Search from "./Search";

import { fetchProfile } from "../../actions/githubActions";

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProfile: username => dispatch(fetchProfile(username))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
