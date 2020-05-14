import { CartActionTypes } from './../types/types';

export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
})