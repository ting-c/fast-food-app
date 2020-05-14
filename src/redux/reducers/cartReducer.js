import { CartActionTypes } from './../types/types';

const INITIAL_STATE = {
  cartItems: []
};

const addItemToCart = (cartItems, itemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === itemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map(cartItem => 
      cartItem.id === itemToAdd.id ? 
        { ...cartItem,  quantity: cartItem.quantity + 1 } :
        { ...cartItem }
    );
  };

  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

const CartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    default: 
      return state;
  };
};

export default CartReducer

