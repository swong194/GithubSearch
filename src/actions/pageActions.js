export const RECEIVE_PAGE = "RECEIVE_PAGE";

export const receivePage = (userId, page) => {
  return {
    type: RECEIVE_PAGE,
    page,
    userId
  };
};
