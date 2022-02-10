import {
  GET_ALL_PRODUCTS,
  ADD_PRODUCT,
  DETAIL_PRODUCT,
  REMOVE_PRODUCT,
  CLEAR_ALL_PRODUCT,
} from "../action/shop/types";

import { OPEN_MODAL, CLOSE_MODAL } from "../action/modal/types";
import { IS_LOADING_ALL } from "../action/loading/types";

const initialState = {
  products: [],
  selected: [],
  detail: {},
  isModalOpen: false,
  isLoadingAll: false,
  isLoadingDetail: false,
  empty: false,
};

function productsReducer(products = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_PRODUCTS:
      return {
        ...products,
        isLoadingAll: false,
        products: payload,
      };
    case ADD_PRODUCT:
      return {
        ...products,
        selected: [...products.selected, payload],
      };

    case REMOVE_PRODUCT:
      return {
        ...products,
        selected: products.selected.filter((item) => item.id !== payload.id),
      };

    case DETAIL_PRODUCT:
      return {
        ...products,
        isLoadingDetail: false,
        detail: payload,
      };

    case OPEN_MODAL:
      return {
        ...products,
        isLoadingDetail: true,
        isModalOpen: true,
      };
    case CLOSE_MODAL:
      return {
        ...products,
        detail: {},
        isModalOpen: false,
      };
    case CLEAR_ALL_PRODUCT:
      return {
        ...products,
        selected: [],
      };
    case IS_LOADING_ALL:
      return {
        ...products,
        isLoadingAll: payload,
      };

    default:
      return products;
  }
}

export default productsReducer;
