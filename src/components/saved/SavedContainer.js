import { connect } from "react-redux";
import Saved from "./Saved";

const mapStateToProps = state => {
  const profiles = Object.values(state.entities.profiles);
  return {
    profiles
  };
};

export default connect(mapStateToProps)(Saved);
