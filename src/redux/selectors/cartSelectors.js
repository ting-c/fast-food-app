import { createSelector } from 'reselect';

const cartSelector = state => state.cart;

export const cartItemsSelector = createSelector(
  [cartSelector],
  cart => cart.cartItems
);

export const totalItemsSelector = createSelector(
  [cartItemsSelector],
  cartItems => cartItems.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0)
);