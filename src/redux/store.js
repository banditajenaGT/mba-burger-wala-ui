import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./reducers/user";
import { cartReducer } from "./reducers/cart";
import { orderReducer, ordersReducer } from "./reducers/order";
import { adminReducer } from "./reducers/admin";

const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    order: orderReducer,
    orders: ordersReducer,
    admin:adminReducer
  },
});

export default store;

export const server = "https://mba-burger-wala-beta.vercel.app/api/v1";
