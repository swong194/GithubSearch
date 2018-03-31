import { connect } from "react-redux";
import Profile from "./Profile";
import { selectProfile } from "../../selectors/profileSelector";

const mapStateToProps = (state, ownProps) => {
  const profile = selectProfile(state, ownProps);
  return {
    profile
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
