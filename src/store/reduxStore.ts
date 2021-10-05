import { configureStore } from '@reduxjs/toolkit';
import { cartSlice }      from "./cartSlice";
import { uiSlice }        from "./uiSlice";

const reducerMap = {
  uiSlice:   uiSlice.reducer,
  cartSlice: cartSlice.reducer,
};

const reduxStore = configureStore({reducer: reducerMap});
export default reduxStore;




