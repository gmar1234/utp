import { CLOSE_MODAL } from "./types";

export const closeModal = () => (dispatch) => {
  dispatch({
    type: CLOSE_MODAL,
  });
};
