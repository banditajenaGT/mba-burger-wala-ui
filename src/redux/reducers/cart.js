import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : {
        cheeseBurger: {
          price: 120,
          quantity: 0,
        },
        vegCheeseBurger: {
          price: 340,
          quantity: 0,
        },
        doubleCheeseBurger: {
          price: 550,
          quantity: 0,
        },
      },
  subTotal: localStorage.getItem("cartPrices")
    ? JSON.parse(localStorage.getItem("cartPrices")).subTotal
    : 0,
  tax: localStorage.getItem("cartPrices")
    ? JSON.parse(localStorage.getItem("cartPrices")).tax
    : 0,
  shippingCharges: localStorage.getItem("cartPrices")
    ? JSON.parse(localStorage.getItem("cartPrices")).shippingCharges
    : 0,
  total: localStorage.getItem("cartPrices")
    ? JSON.parse(localStorage.getItem("cartPrices")).total
    : 0,
  shippingInfo: localStorage.getItem("shippingInfo")
  ? JSON.parse(localStorage.getItem("shippingInfo"))
  : {},
};

export const cartReducer = createReducer(initialState, {
  cheeseBurgerIncrement: (state) => {
    state.cartItems.cheeseBurger.quantity += 1;
  }, 
  vegCheeseBurgerIncrement: (state) => {
    state.cartItems.vegCheeseBurger.quantity += 1;
  },
  doubleCheeseBurgerIncrement: (state) => {
    state.cartItems.doubleCheeseBurger.quantity += 1;
  },
 
  cheeseBurgerDecrement: (state) => {
    state.cartItems.cheeseBurger.quantity -= 1;
  },
  vegCheeseBurgerDecrement: (state) => {
    state.cartItems.vegCheeseBurger.quantity -= 1;
  },
  doubleCheeseBurgerDecrement: (state) => {
    state.cartItems.doubleCheeseBurger.quantity -= 1;
  },

  calculatePrice: (state) => {
    state.subTotal =
      state.cartItems.cheeseBurger.price *
        state.cartItems.cheeseBurger.quantity +
      state.cartItems.vegCheeseBurger.price *
        state.cartItems.vegCheeseBurger.quantity +
      state.cartItems.doubleCheeseBurger.price *
        state.cartItems.doubleCheeseBurger.quantity;
    state.tax = Math.ceil(state.subTotal * 0.18);
    state.shippingCharges =
      state.subTotal === 0 ? 0 : state.subTotal > 1000 ? 0 : 200;
    state.total = state.subTotal + state.tax + state.shippingCharges;
  },

  addShippingInfo: (state, action) => {
    state.shippingInfo = {
      hNo: action.payload.hNo,
      city: action.payload.city,
      country: action.payload.country,
      state: action.payload.state,
      pincode: action.payload.pincode,
      phoneNo: action.payload.phoneNo,
    };
  },

  emptyState: (state) => {
    state.cartItems = {
      cheeseBurger: {
        price: 120,
        quantity: 0,
      },
      vegCheeseBurger: {
        price: 340,
        quantity: 0,
      },
      doubleCheeseBurger: {
        price: 550,
        quantity: 0,
      },
    };
    state.subTotal = 0;
    state.tax = 0;
    state.shippingCharges = 0;
    state.total = 0;
  },
});
