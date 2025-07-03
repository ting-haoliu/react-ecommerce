export const cartReducer = (state, action) => {
   switch (action.type) {
      case 'ADD_TO_CART': {
         const existingItem = state.find(
            (item) => item.id === action.payload.id
         );
         if (existingItem) {
            return state.map((item) =>
               item.id === action.payload.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
            );
         }
         return [...state, { ...action.payload, quantity: 1 }];
      }

      case 'REMOVE_FROM_CART': {
         return state.filter((item) => item.id !== action.payload);
      }

      case 'CLEAR_CART': {
         return [];
      }

      case 'INCREASE_QUANTITY': {
         return state.map((item) =>
            item.id === action.payload
               ? { ...item, quantity: item.quantity + 1 }
               : item
         );
      }

      case 'DECREASE_QUANTITY': {
         return state.map((item) =>
            item.id === action.payload
               ? { ...item, quantity: Math.max(item.quantity - 1, 1) } // Ensure quantity doesn't go below 1
               : item
         );
      }

      default: {
         throw new Error(`Unhandled action type: ${action.type}`);
      }
   }
};
