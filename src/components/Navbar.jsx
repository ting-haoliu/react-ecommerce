import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';

import logo from '../assets/stylenest.svg';
import MobileMenu from './MobileMenu';
import { CartContext } from '../contexts/CartContext';

const Navbar = () => {
   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
   const { totalItems } = useContext(CartContext);

   return (
      <>
         <nav
            className="mx-auto max-w-7xl flex items-center justify-between p-6 md:px-8"
            aria-label="Global"
         >
            {/* Logo Image */}
            <Link to="/" className="-m-1.5 p-1.5">
               <span className="sr-only">Fake Store</span>
               <img className="h-8 w-auto" src={logo} alt="Logo Image" />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex md:justify-between md:w-full">
               <div className="flex items-center gap-x-6 pl-8">
                  <Link
                     to="/"
                     className="text-sm/6 font-semibold text-gray-900"
                  >
                     Home
                  </Link>
                  <Link
                     to="/shop"
                     className="text-sm/6 font-semibold text-gray-900"
                  >
                     Shop
                  </Link>
               </div>
               <div className="flex items-center gap-x-6 pr-6">
                  <Link
                     to="#"
                     className="text-sm/6 font-semibold text-gray-900"
                  >
                     Log in <span aria-hidden="true">&rarr;</span>
                  </Link>
               </div>
            </div>

            {/* Mobile Menu Button and Shopping Cart Icon */}
            <div className="flex items-center gap-4">
               {/* Shopping Cart Icon */}
               <div className="relative flex items-center">
                  <Link
                     to="/cart"
                     className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                     aria-label="Shopping Cart"
                  >
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
                           d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                        />
                     </svg>

                     <span className="absolute -top-1 -right-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                        {totalItems}
                     </span>
                  </Link>
               </div>

               {/* Hamburger Menu */}
               <button
                  type="button"
                  onClick={() => setMobileMenuOpen(true)}
                  className="-m-2.5 inline-flex items-center justify-center rounded-full p-2.5 text-gray-700 hover:bg-gray-100 cursor-pointer md:hidden"
               >
                  <span className="sr-only">Open main menu</span>
                  <svg
                     className="size-6"
                     fill="none"
                     viewBox="0 0 24 24"
                     strokeWidth="1.5"
                     stroke="currentColor"
                     aria-hidden="true"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                     />
                  </svg>
               </button>
            </div>
         </nav>

         {/* Mobile Menu */}
         {mobileMenuOpen && (
            <MobileMenu onClose={() => setMobileMenuOpen(false)} />
         )}
      </>
   );
};

export default Navbar;
