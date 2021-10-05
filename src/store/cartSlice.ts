import { createSlice } from '@reduxjs/toolkit';
import CartItemDef from '../models/cartItemsDef';

// ------------------------------------------------------------------------------------------
export interface cartPayload { payload: {item: CartItemDef}}
export interface cartItemId  { payload: {itemId: string}}

const items: Array<CartItemDef> = [];
const initCartState = {
  items: items,
  totCartQty: 0,
  totCartAmt: 0.0,
};

export const cartSlice = createSlice({
  name: 'cartSlice',
  initialState: initCartState,
  reducers: {
    addItem(state, action: cartPayload) {
      const newItem = action.payload.item;
      const tmpItem = state.items.find(item => item.cartItemId === newItem.cartItemId);
      if (tmpItem) {
        tmpItem.cartItemQty = tmpItem.cartItemQty + 1;
        state.totCartQty = state.totCartQty + 1;
        state.totCartAmt = state.totCartAmt + 1;
      }
      else {
        state.items.push(newItem);
        state.totCartQty = state.totCartQty + 1;
        state.totCartAmt = state.totCartAmt + 1;
      }
    },
    delItem(state, action: cartItemId) {
      const tmpItem = state.items.find(item => item.cartItemId === action.payload.itemId);
      if (tmpItem) {
        if (tmpItem.cartItemQty > 0) {
          tmpItem.cartItemQty = tmpItem.cartItemQty - 1;
          state.totCartQty = state.totCartQty - 1;
          state.totCartAmt = state.totCartAmt - 1;
        }
      }
    },


    incrementItem(state, action: cartPayload) {

    },
    decrement(state, action: cartPayload) {

    },

  }
});

export const cartActions    = cartSlice.actions;