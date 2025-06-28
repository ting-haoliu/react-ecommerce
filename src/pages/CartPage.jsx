import { useContext } from 'react';

import EmptyCart from '../components/EmptyCart';
import OrderSummary from '../components/OrderSummary';
import { CartContext } from '../contexts/CartContext';

const CartPage = () => {
   const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } =
      useContext(CartContext);

   return (
      <div className="h-full bg-gradient-to-b from-gray-50 to-[#d2d6db] p-4">
         {cartItems.length === 0 ? (
            <EmptyCart />
         ) : (
            <div className="bg-white rounded-md px-3 py-12">
               <h2 className="font-semibold text-3xl text-neutral-900 mb-16">Shopping Cart</h2>

               <div className="flex flex-col lg:flex-row lg:gap-8">
                  <div className="lg:w-full lg:min-w-3xl lg:mb-0">
                     {cartItems.map((item, i) => (
                        <div
                           key={i}
                           className={`py-8 border-b border-dashed border-neutral-300 md:flex md:gap-8 ${i === cartItems.length - 1 ? 'border-b-0' : ''}`}
                        >
                           <div className="flex justify-center items-center rounded-lg mb-4">
                              <img
                                 className="w-80 h-52 shrink-0 object-contain rounded-lg"
                                 src={item.image}
                                 alt={item.title}
                              />
                           </div>

                           <div className="flex flex-col gap-4 mb-4">
                              <h3 className="font-medium text-2xl text-neutral-900">
                                 {item.title}
                              </h3>

                              <p>{item.description}</p>

                              <div className="flex items-center gap-4">
                                 <div className="w-32 flex justify-evenly items-center gap-3 bg-neutral-50 p-0.5 rounded-md border border-neutral-200">
                                    <button
                                       className="p-2 cursor-pointer"
                                       onClick={() => decreaseQuantity(item.id)}
                                    >
                                       -
                                    </button>
                                    <span className="font-medium text-sm text-neutral-600">
                                       {item.quantity}
                                    </span>
                                    <button
                                       className="p-2 cursor-pointer"
                                       onClick={() => increaseQuantity(item.id)}
                                    >
                                       +
                                    </button>
                                 </div>
                                 <button
                                    className="font-medium text-sm text-neutral-600 cursor-pointer"
                                    onClick={() => removeFromCart(item.id)}
                                 >
                                    Remove
                                 </button>
                                 <div className="flex items-center gap-2 ml-auto">
                                    <span className="font-medium text-lg text-neutral-900">
                                       $ {(item.price * item.quantity).toFixed(2)}
                                    </span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>

                  <OrderSummary />
               </div>
            </div>
         )}
      </div>
   );
};

export default CartPage;
