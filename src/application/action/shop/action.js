import {
  GET_ALL_PRODUCTS,
  ADD_PRODUCT,
  DETAIL_PRODUCT,
  REMOVE_PRODUCT,
  CLEAR_ALL_PRODUCT,
} from "./types";

import { OPEN_MODAL, CLOSE_MODAL } from "../modal/types";
import { IS_LOADING_ALL } from "../loading/types";

import ShopDataService from "../../../infrastructure/services/shop/methodGet";

export const getProducts =
  (product = "") =>
  async (dipatch) => {
    dipatch({
      type: IS_LOADING_ALL,
      payload: true,
    });
    await ShopDataService.getRecord(product)
      .then((response) => {
        const rsp = response.data;
        dipatch({
          type: GET_ALL_PRODUCTS,
          payload: rsp,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

export const detailProduct =
  ({ id }) =>
  async (dipatch) => {
    dipatch({
      type: OPEN_MODAL,
    });
    await ShopDataService.getRecord(id)
      .then((response) => {
        const rsp = response.data;
        dipatch({
          type: DETAIL_PRODUCT,
          payload: rsp,
        });
      })
      .catch((err) => {
        dipatch({
          type: CLOSE_MODAL,
        });
      });
  };

export const addProduct = (product) => (dispatch) => {
  dispatch({
    type: ADD_PRODUCT,
    payload: product,
  });
};

export const clearAll = () => (dispatch) => {
  dispatch({
    type: CLEAR_ALL_PRODUCT,
  });
};

export const removeProduct = (product) => (dispatch) => {
  dispatch({
    type: REMOVE_PRODUCT,
    payload: product,
  });
};
