import { createContext, useContext, useReducer } from 'react';

import { cartReducer, productReducer } from './Reducers';
import { data } from '../components/Data';

const CartContext = createContext();

const Context = ({ children }) => {
  //   const fetchedProducts = async () => {
  //     const response = await fetch('https://fakestoreapi.com/products');
  //     const products = await response.json();
  //     return products;
  //   };
  //   console.log(fetchedProducts());

  const [state, dispatch] = useReducer(cartReducer, {
    products: data,
    cart: [],
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: '',
  });

  return (
    <CartContext.Provider
      value={{ state, dispatch, productState, productDispatch }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const CartState = () => {
  return useContext(CartContext);
};

export default Context;
