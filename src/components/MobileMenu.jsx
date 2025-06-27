import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import logo from '../assets/stylenest.svg';

const MobileMenu = ({ onClose }) => {
   return (
      <div className="md:hidden fixed inset-0 z-50 bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 overflow-y-auto">
         <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="-m-1.5 p-1.5">
               <span className="sr-only">Fake Store</span>
               <img className="h-8 w-auto" src={logo} alt="Logo Image" />
            </Link>

            {/* Close Button */}
            <button
               type="button"
               onClick={onClose}
               className="-m-2.5 rounded-full p-2.5 text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
               <span className="sr-only">Close menu</span>
               <svg
                  className="size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
               >
                  <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     d="M6 18 18 6M6 6l12 12"
                  />
               </svg>
            </button>
         </div>

         {/* Navigation Links */}
         <div className="flex flex-col gap-y-6 mt-6">
            <Link
               to="/"
               className="text-sm/6 font-semibold text-gray-900"
               onClick={onClose}
            >
               Home
            </Link>
            <Link
               to="/shop"
               className="text-sm/6 font-semibold text-gray-900"
               onClick={onClose}
            >
               Shop
            </Link>
            <Link
               to="#"
               className="text-sm/6 font-semibold text-gray-900 border-t-2 border-gray-200 pt-6"
               onClick={onClose}
            >
               Log in <span aria-hidden="true">&rarr;</span>
            </Link>
         </div>
      </div>
   );
};

MobileMenu.propTypes = {
   onClose: PropTypes.func.isRequired,
};
MobileMenu.defaultProps = {
   onClose: () => {},
};

export default MobileMenu;
