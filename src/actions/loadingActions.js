export const RECEIVE_LOADING = "RECEIVE_LOADING";
export const REMOVE_LOADING = "REMOVE_LOADING";

export const receiveLoading = () => {
  return {
    type: RECEIVE_LOADING
  };
};

export const removeLoading = () => {
  return {
    type: REMOVE_LOADING
  };
};
