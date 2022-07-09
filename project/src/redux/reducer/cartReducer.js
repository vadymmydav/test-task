import { CartActionTypes } from "../types/cartTypes";
import { mockData } from "../../mockData/mockData";

const initialState = {
  products: [],
  user: { address: null, email: null, phone: null, name: null },
  totalPrice: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CartActionTypes.ADD_PRODUCT:
      console.log(action)
      return {
        ...state,
        products: state.products.find(
          (product) => product.name === action.product.name
        )
          ? state.products.map((item) =>
              item.name === action.product.name
                ? {
                    ...item,
                    quantity: item.quantity + 1,
                  }
                : item
            )
          : [...state.products, action.product],
      };
    case CartActionTypes.CHANGE_QUANTITY:
      console.log(action)
      return {
        ...state,
        products: state.products.map((item) =>
          item.name === action.data.product.name
            ? {
                ...item,
                quantity: action.data.quantity,
              }
            : item
        ),
      };
    case CartActionTypes.SET_USER_ADDRESS:
      return {
        ...state,
        user: { ...state.user, address: action.address },
      };
    case CartActionTypes.SET_USER_EMAIL:
      return {
        ...state,
        user: { ...state.user, email: action.email },
      };
    case CartActionTypes.SET_USER_PHONE:
      return {
        ...state,
        user: { ...state.user, phone: action.phone },
      };
    case CartActionTypes.SET_USER_NAME:
      return {
        ...state,
        user: { ...state.user, name: action.name },
      };
    default:
      return state;
  }
};

export default cartReducer;
