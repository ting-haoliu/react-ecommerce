import { createContext, useState, useEffect, useMemo } from 'react';

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
   const [cartItems, setCartItems] = useState(() => {
      const savedCart = localStorage.getItem('cart');
      return savedCart ? JSON.parse(savedCart) : [];
   });

   const totalItems = useMemo(() => {
      return cartItems.reduce((total, item) => total + item.quantity, 0);
   }, [cartItems]);

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
      setCartItems((prevCart) => {
         const existingItem = prevCart.find(
            (prevCartItem) => prevCartItem.id === product.id
         );
         if (existingItem) {
            return prevCart.map((cartItem) =>
               cartItem.id === product.id
                  ? { ...cartItem, quantity: cartItem.quantity + 1 }
                  : cartItem
            );
         } else {
            return [...prevCart, { ...product, quantity: 1 }];
         }
      });
   };

   const removeFromCart = (productId) => {
      setCartItems((prevCart) =>
         prevCart.filter((item) => item.id !== productId)
      );
   };

   const clearCart = () => {
      setCartItems([]);
   };

   const increaseQuantity = (productId) => {
      setCartItems((prevCart) =>
         prevCart.map((item) =>
            item.id === productId
               ? { ...item, quantity: item.quantity + 1 }
               : item
         )
      );
   };

   const decreaseQuantity = (productId) => {
      setCartItems((prevCart) =>
         prevCart.map((item) =>
            item.id === productId
               ? {
                    ...item,
                    quantity: Math.max(item.quantity - 1, 1), // Ensure quantity doesn't go below 1
                 }
               : item
         )
      );
   };

   return (
      <ShopContext.Provider
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
      </ShopContext.Provider>
   );
};
