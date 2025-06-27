export const cartReducer = (state, action) => {
   switch (action.type) {
      case 'ADD_TO_CART':
         return {
            ...state,
            cartItems: [...state.cartItems, action.payload],
         };
      case 'REMOVE_FROM_CART':
         return {
            ...state,
            cartItems: state.cartItems.filter(
               (item) => item.id !== action.payload.id
            ),
         };
      case 'CLEAR_CART':
         return {
            ...state,
            cartItems: [],
         };
      case 'INCREASE_QUANTITY':
         return {
            ...state,
            cartItems: state.cartItems.map((item) =>
               item.id === action.payload.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
            ),
         };
      case 'DECREASE_QUANTITY':
         return {
            ...state,
            cartItems: state.cartItems.map((item) =>
               item.id === action.payload.id
                  ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
                  : item
            ),
         };
      default:
         return state;
   }
};
