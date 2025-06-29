import { Link } from 'react-router-dom';

import shoppingCartImage from '../assets/empty-cart.png';

const EmptyCart = () => {
   return (
      <div className="flex flex-col bg-white rounded-md w-full h-full px-3 py-12">
         <div className="flex flex-col gap-16 grow">
            <h2 className="font-semibold text-3xl text-neutral-900">Shopping Cart</h2>

            <div className="flex flex-col items-center gap-8 grow lg:flex-row lg:px-8">
               {/* Empty Cart Message */}
               <div className="flex flex-col justify-center items-center gap-5 grow p-6">
                  <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                     >
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                        />
                     </svg>
                  </div>

                  <div className="flex flex-col items-center gap-2">
                     <span className="font-medium text-xl text-center text-neutral-900">
                        Your cart is empty
                     </span>
                     <span className="font-normal text-base text-center text-neutral-900">
                        Let's go explore some products
                     </span>
                  </div>

                  <Link
                     to="/shop"
                     className="flex items-center gap-1.5 bg-indigo-700 px-4 py-2.5 rounded"
                  >
                     <span className="font-medium text-base text-white">Explore products</span>
                     <span className="font-medium text-base text-white" aria-hidden="true">
                        &rarr;
                     </span>
                  </Link>
               </div>

               {/* Optional product preview card */}
               <div className="w-full h-auto bg-white rounded-lg border border-neutral-200 overflow-hidden lg:max-w-lg">
                  <img
                     className="object-cover w-full h-full"
                     src={shoppingCartImage}
                     alt="Preview"
                  />
               </div>
            </div>
         </div>
      </div>
   );
};

export default EmptyCart;
