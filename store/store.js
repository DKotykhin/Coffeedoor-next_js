import { configureStore } from '@reduxjs/toolkit';

import basket from '../components/basket/BasketListSlice';
import itempage from '../components/itemlist/ItemListSlice';


const store = configureStore({
  reducer: { basket, itempage }, 
  devTools: process.env.NODE_ENV !== 'production'  
});

export default store;