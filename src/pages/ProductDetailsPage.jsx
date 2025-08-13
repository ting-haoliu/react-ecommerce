import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { fetchProductById } from '../services/products';
import { HeartIcon, ShoppingCartIcon } from '../components/icons';

const ProductDetailsPage = () => {
   const [product, setProduct] = useState(null);
   const [error, setError] = useState(null);
   const [loading, setLoading] = useState(true);
   const { id } = useParams();

   useEffect(() => {
      fetchProductById(id)
         .then((product) => {
            setProduct(product);
         })
         .catch((err) => {
            setError(err.message);
         })
         .finally(() => {
            setLoading(false);
         });
   }, [id]);

   if (loading) {
      return <div className="text-center">Loading products...</div>;
   }
   if (error) {
      return <div className="text-center text-red-500">Error: {error}</div>;
   }

   return (
      <section className="py-8 bg-white md:py-16 antialiased">
         <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
               <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
                  <img
                     className="w-full"
                     src={product.image}
                     alt={`image of ${product.title}`}
                  />
               </div>

               <div className="mt-6 sm:mt-8 lg:mt-0">
                  <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                     {product.title}
                  </h1>
                  <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
                     <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                        ${product.price}
                     </p>
                  </div>

                  <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
                     <a
                        href="#"
                        title=""
                        className="flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
                        role="button"
                     >
                        <HeartIcon />
                        Add to favorites
                     </a>

                     <a
                        href="#"
                        title=""
                        className="text-white mt-4 sm:mt-0 bg-blue-400 hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 flex items-center justify-center"
                        role="button"
                     >
                        <ShoppingCartIcon className="w-5 h-5 me-2" />
                        Add to cart
                     </a>
                  </div>

                  <hr className="my-6 md:my-8 border-gray-200" />

                  <p className="mb-6 text-gray-500">{product.description}</p>

                  <div className="flex items-center gap-4">
                     <span className="text-sm font-medium text-gray-900">
                        Category:
                     </span>
                     <span className="text-sm text-gray-500">
                        {product.category}
                     </span>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default ProductDetailsPage;
