export const selectProfile = (state, ownProps) => {
  const profile =
    state.entities.profiles[ownProps.match.params.profileId] || {};
  return profile;
};

export const selectPage = (state, ownProps) => {
  const page = state.entities.pages[ownProps.match.params.profileId] || null;
  let nextPage;
  let maxPage;
  if (page) {
    maxPage = Math.ceil(
      state.entities.profiles[ownProps.match.params.profileId].followers / 20
    );
  }
  if (!page) {
    nextPage = 1;
  } else if (page !== maxPage) {
    nextPage = page + 1;
  }
  return { page, nextPage, maxPage };
};

export const selectFollowers = (state, ownProps) => {
  const followers =
    state.entities.followers[ownProps.match.params.profileId] || [];
  return followers;
};
