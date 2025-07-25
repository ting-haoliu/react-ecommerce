import { Link } from 'react-router-dom';

import logo from '../assets/stylenest.svg';
import { LinkedInIcon, GitHubIcon } from './icons';

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
                           <Link to="#" className="hover:underline">
                              Categories
                           </Link>
                        </li>
                        <li className="mb-4">
                           <Link to="#" className="hover:underline">
                              New Arrivals
                           </Link>
                        </li>
                        <li>
                           <Link to="#" className="hover:underline">
                              Best Sellers
                           </Link>
                        </li>
                     </ul>
                  </section>

                  <section>
                     <h2 className="mb-4 text-sm font-semibold text-gray-700 uppercase">
                        Customer Service
                     </h2>
                     <ul className="text-gray-500">
                        <li className="mb-4">
                           <Link to="#" className="hover:underline">
                              Track Order
                           </Link>
                        </li>
                        <li className="mb-4">
                           <Link to="#" className="hover:underline">
                              Returns & Exchanges
                           </Link>
                        </li>
                        <li>
                           <Link to="#" className="hover:underline">
                              Contact Us
                           </Link>
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
                        <li className="mb-4">
                           <a href="#" className="hover:underline">
                              Instagram
                           </a>
                        </li>
                        <li>
                           <a href="#" className="hover:underline">
                              Twitter
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

            <hr className="my-6 border-gray-200 mx-auto lg:my-8" />

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
                     <LinkedInIcon />
                  </a>

                  <a
                     href="https://github.com/ting-haoliu"
                     className="text-gray-400 hover:text-gray-700"
                     aria-label="GitHub"
                  >
                     <GitHubIcon />
                  </a>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
