import { configureStore } from '@reduxjs/toolkit';
import counterReducer from "./counter";
import getProduct from './getProduct';
import getSingleProduct from './getSingleProduct';


export const store = configureStore({
    reducer:{           
      counter: counterReducer,
      getProduct: getProduct,
      getSingleProduct: getSingleProduct
    },
  });