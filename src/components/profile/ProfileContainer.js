import { connect } from "react-redux";
import Profile from "./Profile";
import { selectProfile } from "../../selectors/profileSelector";

const mapStateToProps = (state, ownProps) => {
  const profile = selectProfile(state, ownProps);
  return {
    profile
  };
};

export default connect(mapStateToProps, null)(Profile);
