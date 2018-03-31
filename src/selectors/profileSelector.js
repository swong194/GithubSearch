export const selectProfile = (state, ownProps) => {
  const profile =
    state.entities.profiles[ownProps.match.params.profileId] || {};
  return profile;
};
