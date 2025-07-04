import { useState, useEffect } from 'react';
import { getProducts } from '../services/products';
import ProductCard from './ProductCard';

const ProductList = () => {
   const [products, setProducts] = useState([]);
   const [error, setError] = useState(null);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const fetchProducts = async () => {
         try {
            const fetchedProducts = await getProducts();
            setProducts(fetchedProducts);
         } catch (err) {
            setError(err.message);
         } finally {
            setLoading(false);
         }
      };

      fetchProducts();
   }, []);

   if (loading) {
      return <div className="text-center">Loading products...</div>;
   }
   if (error) {
      return <div className="text-center text-red-500">Error: {error}</div>;
   }

   return (
      <>
         <div className="flex gap-4 mb-4 sm:justify-end sm:gap-2">
            {/* Filter Button */}
            <button
               type="button"
               data-modal-toggle="filterModal"
               data-modal-target="filterModal"
               className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100  sm:w-auto"
            >
               {/* Left Icon */}
               <svg
                  className="-ms-0.5 me-2 h-4 w-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
               >
                  <path
                     stroke="currentColor"
                     strokeLinecap="round"
                     strokeWidth="2"
                     d="M18.796 4H5.204a1 1 0 0 0-.753 1.659l5.302 6.058a1 1 0 0 1 .247.659v4.874a.5.5 0 0 0 .2.4l3 2.25a.5.5 0 0 0 .8-.4v-7.124a1 1 0 0 1 .247-.659l5.302-6.059c.566-.646.106-1.658-.753-1.658Z"
                  />
               </svg>
               Filters
               {/* Right Icon */}
               <svg
                  className="-me-0.5 ms-2 h-4 w-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
               >
                  <path
                     stroke="currentColor"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     strokeWidth="2"
                     d="m19 9-7 7-7-7"
                  />
               </svg>
            </button>

            {/* Sort Button */}
            <button
               type="button"
               id="sortDropdownButton1"
               data-dropdown-toggle="dropdownSort1"
               className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100  sm:w-auto"
            >
               {/* Left Icon */}
               <svg
                  className="-ms-0.5 me-2 h-4 w-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
               >
                  <path
                     stroke="currentColor"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     strokeWidth="2"
                     d="M7 4v16M7 4l3 3M7 4 4 7m9-3h6l-6 6h6m-6.5 10 3.5-7 3.5 7M14 18h4"
                  />
               </svg>
               Sort
               {/* Right Icon */}
               <svg
                  className="-me-0.5 ms-2 h-4 w-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
               >
                  <path
                     stroke="currentColor"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     strokeWidth="2"
                     d="m19 9-7 7-7-7"
                  />
               </svg>
            </button>
         </div>

         <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
               <ProductCard key={product.id} product={product} />
            ))}
         </div>
      </>
   );
};

export default ProductList;
