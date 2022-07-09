import { CartActionTypes } from "../types/cartTypes";

export const cartActions = {
  addProduct: (product) => ({
    type: CartActionTypes.ADD_PRODUCT,
    product,
  }),
  changeQuantity: (data) => ({
    type: CartActionTypes.CHANGE_QUANTITY,
    data
  }),
  setUserName: (name) => ({
    type: CartActionTypes.SET_USER_NAME,
    name,
  }),
  setUserPhone: (phone) => ({
    type: CartActionTypes.SET_USER_PHONE,
    phone,
  }),
  setUserEmail: (email) => ({
    type: CartActionTypes.SET_USER_EMAIL,
    email,
  }),
  setUserAddress: (address) => ({
    type: CartActionTypes.SET_USER_ADDRESS,
    address,
  }),
};
