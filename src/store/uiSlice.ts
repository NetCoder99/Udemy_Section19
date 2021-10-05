import { createSlice } from '@reduxjs/toolkit';

// ------------------------------------------------------------------------------------------
//export interface uiPayload { payload: {cartVisible: boolean} }

const initUiState = {
  cartVisible: false,
};

export const uiSlice = createSlice({
  name: 'uiSlice',
  initialState: initUiState,
  reducers: {
    toggle(state) {
      state.cartVisible = !state.cartVisible;
    },
    show(state) {
      state.cartVisible = true;
    },
    hide(state) {
      state.cartVisible = false;
    },
  }
});

export const uiActions    = uiSlice.actions;