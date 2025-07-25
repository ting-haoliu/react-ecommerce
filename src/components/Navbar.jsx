import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';

import logo from '../assets/stylenest.svg';
import { ShoppingCartIcon, HamburgerIcon } from './icons';
import MobileMenu from './MobileMenu';
import { CartContext } from '../contexts/CartContext';

const Navbar = () => {
   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
   const { totalItems } = useContext(CartContext);

   const openMobileMenu = () => setMobileMenuOpen(true);
   const closeMobileMenu = () => setMobileMenuOpen(false);

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
                  <Link to="/" className="text-sm font-semibold text-gray-900">
                     Home
                  </Link>
                  <Link
                     to="/shop"
                     className="text-sm font-semibold text-gray-900"
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
                     <ShoppingCartIcon className="size-6" />
                     <span className="absolute -top-1 -right-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                        {totalItems}
                     </span>
                  </Link>
               </div>

               {/* Hamburger Menu */}
               <button
                  type="button"
                  onClick={openMobileMenu}
                  className="-m-2.5 inline-flex items-center justify-center rounded-full p-2.5 text-gray-700 hover:bg-gray-100 cursor-pointer md:hidden"
               >
                  <span className="sr-only">Open main menu</span>
                  <HamburgerIcon className="size-6" />
               </button>
            </div>
         </nav>

         {/* Mobile Menu */}
         {mobileMenuOpen && <MobileMenu onClose={closeMobileMenu} />}
      </>
   );
};

export default Navbar;
