import { ShopActionTypes } from "../types/shopTypes";

export const shopActions = {
  setSelectedShop: (shop) => ({
    type: ShopActionTypes.SET_SELECTED_SHOP,
    shop,
  }),
};
