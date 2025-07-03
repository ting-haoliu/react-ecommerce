import { createContext, useEffect, useMemo, useReducer } from 'react';
import PropTypes from 'prop-types';

import { cartReducer } from '../reducers/cartReducer';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
   const initialState = [];

   const init = () => {
      const savedCart = localStorage.getItem('cart');
      return savedCart ? JSON.parse(savedCart) : initialState;
   };

   const [cartItems, dispatch] = useReducer(cartReducer, initialState, init);

   // const [cartItems, setCartItems] = useState(() => {
   //    const savedCart = localStorage.getItem('cart');
   //    return savedCart ? JSON.parse(savedCart) : [];
   // });

   const totalItems = useMemo(() => {
      return cartItems.reduce((total, item) => total + item.quantity, 0);
   }, [cartItems]);

   // Save cart items to localStorage whenever cartItems changes
   useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(cartItems));
   }, [cartItems]);

   const currentBalance = useMemo(() => {
      return cartItems.reduce(
         (total, item) => total + item.price * item.quantity,
         0
      );
   }, [cartItems]);

   const addToCart = (product) => {
      dispatch({ type: 'ADD_TO_CART', payload: product });
   };

   const removeFromCart = (productId) => {
      dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
   };

   const clearCart = () => {
      dispatch({ type: 'CLEAR_CART' });
   };

   const increaseQuantity = (productId) => {
      dispatch({ type: 'INCREASE_QUANTITY', payload: productId });
   };

   const decreaseQuantity = (productId) => {
      dispatch({ type: 'DECREASE_QUANTITY', payload: productId });
   };

   // const addToCart = (product) => {
   //    setCartItems((prevCart) => {
   //       const existingItem = prevCart.find((prevCartItem) => prevCartItem.id === product.id);
   //       if (existingItem) {
   //          return prevCart.map((cartItem) =>
   //             cartItem.id === product.id
   //                ? { ...cartItem, quantity: cartItem.quantity + 1 }
   //                : cartItem
   //          );
   //       } else {
   //          return [...prevCart, { ...product, quantity: 1 }];
   //       }
   //    });
   // };

   // const removeFromCart = (productId) => {
   //    setCartItems((prevCart) => prevCart.filter((item) => item.id !== productId));
   // };

   // const clearCart = () => {
   //    setCartItems([]);
   // };

   // const increaseQuantity = (productId) => {
   //    setCartItems((prevCart) =>
   //       prevCart.map((item) =>
   //          item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
   //       )
   //    );
   // };

   // const decreaseQuantity = (productId) => {
   //    setCartItems((prevCart) =>
   //       prevCart.map((item) =>
   //          item.id === productId
   //             ? {
   //                  ...item,
   //                  quantity: Math.max(item.quantity - 1, 1), // Ensure quantity doesn't go below 1
   //               }
   //             : item
   //       )
   //    );
   // };

   return (
      <CartContext.Provider
         value={{
            cartItems,
            totalItems,
            addToCart,
            removeFromCart,
            clearCart,
            increaseQuantity,
            decreaseQuantity,
            currentBalance,
         }}
      >
         {children}
      </CartContext.Provider>
   );
};

CartProvider.propTypes = {
   children: PropTypes.node.isRequired,
};
