import { useState, useEffect } from 'react';

import { fetchProducts } from '../services/products';
import ProductCard from './ProductCard';

import { FilterIcon } from './icons';
import { ArrowDownIcon } from './icons';
import { SortIcon } from './icons';

const ProductList = () => {
   const [products, setProducts] = useState([]);
   const [error, setError] = useState(null);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      fetchProducts()
         .then((products) => {
            setProducts(products);
         })
         .catch((err) => {
            setError(err.message);
         })
         .finally(() => {
            setLoading(false);
         });
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
               className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 sm:w-auto"
            >
               {/* Left Icon */}
               <FilterIcon className="-ms-0.5 me-2 h-4 w-4" />
               Filters
               {/* Right Icon */}
               <ArrowDownIcon className="-me-0.5 ms-2 h-4 w-4" />
            </button>

            {/* Sort Button */}
            <button
               type="button"
               className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 sm:w-auto"
            >
               {/* Left Icon */}
               <SortIcon className="-ms-0.5 me-2 h-4 w-4" />
               Sort
               {/* Right Icon */}
               <ArrowDownIcon className="-me-0.5 ms-2 h-4 w-4" />
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
