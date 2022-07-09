import { combineReducers, createStore } from "redux";
import cartReducer from "./reducer/cartReducer";
import shopReducer from "./reducer/shopsReducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  shop: shopReducer,
});
const store = createStore(rootReducer);
export default store;
