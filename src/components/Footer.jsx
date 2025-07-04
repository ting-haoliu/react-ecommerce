import { Link } from 'react-router-dom';

import logo from '../assets/stylenest.svg';

const Footer = () => {
   const currentYear = new Date().getFullYear();

   return (
      <footer className="p-4 bg-gray-50 sm:p-6">
         <div className="mx-auto max-w-screen-xl">
            <div className="md:flex md:justify-between">
               <div className="mb-6 md:mb-0">
                  <Link to="/" className="flex items-center">
                     <img src={logo} className="mr-3 h-8" alt="Logo Image" />
                  </Link>
               </div>

               <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 md:gap-4 md:grid-cols-4">
                  <section>
                     <h2 className="mb-4 text-sm font-semibold text-gray-700 uppercase">
                        Shopping Guide
                     </h2>
                     <ul className="text-gray-500">
                        <li className="mb-4">
                           <a href="#" className="hover:underline">
                              Categories
                           </a>
                        </li>
                        <li className="mb-4">
                           <a href="#" className="hover:underline">
                              New Arrivals
                           </a>
                        </li>
                        <li>
                           <a href="#" className="hover:underline">
                              Best Sellers
                           </a>
                        </li>
                     </ul>
                  </section>

                  <section>
                     <h2 className="mb-4 text-sm font-semibold text-gray-700 uppercase">
                        Customer Service
                     </h2>
                     <ul className="text-gray-500">
                        <li className="mb-4">
                           <a href="#" className="hover:underline">
                              Track Order
                           </a>
                        </li>
                        <li className="mb-4">
                           <a href="#" className="hover:underline">
                              Returns & Exchanges
                           </a>
                        </li>
                        <li>
                           <a href="#" className="hover:underline">
                              Contact Us
                           </a>
                        </li>
                     </ul>
                  </section>

                  <section>
                     <h2 className="mb-4 text-sm font-semibold text-gray-700 uppercase">
                        Follow Us
                     </h2>
                     <ul className="text-gray-500">
                        <li className="mb-4">
                           <a href="#" className="hover:underline">
                              Facebook
                           </a>
                        </li>
                        <li>
                           <a href="#" className="hover:underline">
                              Instagram
                           </a>
                        </li>
                     </ul>
                  </section>

                  <section>
                     <h2 className="mb-4 text-sm font-semibold text-gray-700 uppercase">
                        Legal
                     </h2>
                     <ul className="text-gray-500">
                        <li className="mb-4">
                           <a href="#" className="hover:underline">
                              Privacy Policy
                           </a>
                        </li>
                        <li className="mb-4">
                           <a href="#" className="hover:underline">
                              Terms & Conditions
                           </a>
                        </li>
                        <li>
                           <a href="#" className="hover:underline">
                              Shipping Info
                           </a>
                        </li>
                     </ul>
                  </section>
               </div>
            </div>

            <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />

            <div className="sm:flex sm:items-center sm:justify-between">
               <span className="text-sm text-gray-500 sm:text-center">
                  Ting-Hao Liu © {currentYear}. All rights reserved.
               </span>

               <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                  <a
                     href="https://www.linkedin.com/in/tinghao-liu/"
                     className="text-gray-400 hover:text-gray-700"
                     aria-label="LinkedIn"
                  >
                     <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                     >
                        <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.75 20h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76 0-.97.78-1.76 1.75-1.76s1.75.79 1.75 1.76c0 .97-.78 1.76-1.75 1.76zm15.25 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.37-1.54 2.82-1.54 3.01 0 3.57 1.98 3.57 4.56v5.62z" />
                     </svg>
                  </a>
                  <a
                     href="https://github.com/ting-haoliu"
                     className="text-gray-400 hover:text-gray-700"
                     aria-label="GitHub"
                  >
                     <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                     >
                        <path
                           fillRule="evenodd"
                           d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                           clipRule="evenodd"
                        />
                     </svg>
                  </a>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
