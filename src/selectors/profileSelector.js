export const selectProfile = (state, ownProps) => {
  const profile =
    state.entities.profiles[ownProps.match.params.profileId] || {};
  return profile;
};

export const selectPage = (state, ownProps) => {
  const page = state.entities.pages[ownProps.match.params.profileId] || null;
  let nextPage;
  if (page) {
    // checks if maxPage
    const maxPage = Math.floor(
      state.entities.profiles[ownProps.match.params.profileId].followers / 20
    );
    if (page !== maxPage) {
      nextPage = page + 1;
    }
  }
  return { page, nextPage };
};
