import { ShopActionTypes } from "../types/shopTypes";
import { mockData } from "../../mockData/mockData";

const initialState = {
  selectedShop: mockData["Faine Misto"],
  shops: Object.keys(mockData),
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case ShopActionTypes.SET_SELECTED_SHOP:
      return {
        ...state,
        selectedShop: mockData[action.shop],
      };
    default:
      return state;
  }
};

export default shopReducer;
