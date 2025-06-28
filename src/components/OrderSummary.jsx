import { useContext } from 'react';

import { CartContext } from '../contexts/CartContext';

const OrderSummary = () => {
   const { currentBalance } = useContext(CartContext);

   return (
      <div className="bg-white p-4 rounded-lg border border-neutral-200 self-start w-full">
         <h3 className="font-semibold text-2xl text-neutral-900 mb-8">Order Summary</h3>

         <div className="flex justify-between mb-4">
            <span className="text-base text-neutral-600">Subtotal</span>
            <span className="font-semibold text-lg text-neutral-900">
               $ {currentBalance.toFixed(2)}
            </span>
         </div>

         <div className="flex justify-between mb-4">
            <span className="text-base text-neutral-600">Shipping</span>
            <span className="font-semibold text-lg text-neutral-900">FREE</span>
         </div>

         <hr className="border-dashed border-neutral-300 my-8" />

         <div className="flex justify-between mb-4">
            <span className="font-medium text-2xl text-neutral-900">Total</span>
            <span className="font-semibold text-4xl text-neutral-900">
               $ {currentBalance.toFixed(2)}
            </span>
         </div>

         <button className="w-full bg-indigo-700 hover:bg-indigo-800 transition cursor-pointer px-6 py-4 rounded text-white font-medium text-lg">
            Checkout
         </button>
      </div>
   );
};

export default OrderSummary;
