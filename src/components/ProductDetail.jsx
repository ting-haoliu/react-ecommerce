import { useState } from 'react';

const ProductDetail = () => {
   const [selectedColor, setSelectedColor] = useState('white');
   const [selectedSize, setSelectedSize] = useState('');

   const colors = ['white', 'gray', 'black'];
   const sizes = ['XXS', 'XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'];

   return (
      <div className="bg-white">
         <div className="pt-6">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb">
               <ol className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                  <li>
                     <div className="flex items-center">
                        <a
                           href="#"
                           className="mr-2 text-sm font-medium text-gray-900"
                        >
                           Men
                        </a>
                        <svg
                           className="h-5 w-4 text-gray-300"
                           viewBox="0 0 16 20"
                           fill="currentColor"
                        >
                           <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                        </svg>
                     </div>
                  </li>
                  <li>
                     <div className="flex items-center">
                        <a
                           href="#"
                           className="mr-2 text-sm font-medium text-gray-900"
                        >
                           Clothing
                        </a>
                        <svg
                           className="h-5 w-4 text-gray-300"
                           viewBox="0 0 16 20"
                           fill="currentColor"
                        >
                           <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                        </svg>
                     </div>
                  </li>
                  <li className="text-sm">
                     <a
                        href="#"
                        aria-current="page"
                        className="font-medium text-gray-500 hover:text-gray-600"
                     >
                        Basic Tee 6-Pack
                     </a>
                  </li>
               </ol>
            </nav>

            {/* Image gallery */}
            <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">
               <img
                  src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-secondary-product-shot.jpg"
                  alt="..."
                  className="row-span-2 aspect-3/4 size-full rounded-lg object-cover max-lg:hidden"
               />
               <img
                  src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg"
                  alt="..."
                  className="col-start-2 aspect-3/2 size-full rounded-lg object-cover max-lg:hidden"
               />
               <img
                  src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg"
                  alt="..."
                  className="col-start-2 row-start-2 aspect-3/2 size-full rounded-lg object-cover max-lg:hidden"
               />
               <img
                  src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-featured-product-shot.jpg"
                  alt="..."
                  className="row-span-2 aspect-4/5 size-full object-cover sm:rounded-lg lg:aspect-3/4"
               />
            </div>

            {/* Product Info */}
            <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
               <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                  <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                     Basic Tee 6-Pack
                  </h1>
               </div>

               {/* Purchase Options */}
               <div className="mt-4 lg:row-span-3 lg:mt-0">
                  <p className="text-3xl tracking-tight text-gray-900">$192</p>

                  {/* Reviews */}
                  <div className="mt-6 flex items-center">
                     <div className="flex text-gray-900">
                        {[...Array(4)].map((_, i) => (
                           <svg
                              key={i}
                              className="size-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                           >
                              <path
                                 fillRule="evenodd"
                                 d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-..."
                                 clipRule="evenodd"
                              />
                           </svg>
                        ))}
                        <svg
                           className="size-5 text-gray-200"
                           viewBox="0 0 20 20"
                           fill="currentColor"
                        >
                           <path
                              fillRule="evenodd"
                              d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-..."
                              clipRule="evenodd"
                           />
                        </svg>
                     </div>
                     <a
                        href="#"
                        className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                     >
                        117 reviews
                     </a>
                  </div>

                  {/* Color Options */}
                  <div className="mt-10">
                     <h3 className="text-sm font-medium text-gray-900">
                        Color
                     </h3>
                     <div className="mt-4 flex items-center gap-x-3">
                        {colors.map((color) => (
                           <label
                              key={color}
                              className="flex rounded-full outline -outline-offset-1 outline-black/10"
                           >
                              <input
                                 type="radio"
                                 name="color"
                                 value={color}
                                 checked={selectedColor === color}
                                 onChange={() => setSelectedColor(color)}
                                 className={`size-8 appearance-none rounded-full bg-${color === 'white' ? 'white' : color === 'gray' ? 'gray-200' : 'gray-900'} checked:outline-2 checked:outline-offset-2 checked:outline-${color === 'black' ? 'gray-900' : 'gray-400'}`}
                              />
                           </label>
                        ))}
                     </div>
                  </div>

                  {/* Size Options */}
                  <div className="mt-10">
                     <h3 className="text-sm font-medium text-gray-900">Size</h3>
                     <fieldset className="mt-4 grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                        {sizes.map((size) => (
                           <label
                              key={size}
                              className={`group relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase ${size === 'XXS' ? 'cursor-not-allowed bg-gray-50 text-gray-200' : 'cursor-pointer bg-white text-gray-900 shadow-xs hover:bg-gray-50'}`}
                           >
                              <input
                                 type="radio"
                                 name="size-choice"
                                 value={size}
                                 disabled={size === 'XXS'}
                                 checked={selectedSize === size}
                                 onChange={() => setSelectedSize(size)}
                                 className="sr-only"
                              />
                              <span>{size}</span>
                           </label>
                        ))}
                     </fieldset>
                  </div>

                  <button
                     type="submit"
                     className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700"
                  >
                     Add to bag
                  </button>
               </div>

               {/* Description */}
               <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pr-8 lg:pb-16">
                  <div className="space-y-6">
                     <p className="text-base text-gray-900">
                        The Basic Tee 6-Pack allows you to fully express your
                        vibrant personality with three grayscale options...
                     </p>
                  </div>

                  <div className="mt-10">
                     <h3 className="text-sm font-medium text-gray-900">
                        Highlights
                     </h3>
                     <ul className="mt-4 list-disc space-y-2 pl-4 text-sm text-gray-600">
                        <li>Hand cut and sewn locally</li>
                        <li>Dyed with our proprietary colors</li>
                        <li>Pre-washed & pre-shrunk</li>
                        <li>Ultra-soft 100% cotton</li>
                     </ul>
                  </div>

                  <div className="mt-10">
                     <h2 className="text-sm font-medium text-gray-900">
                        Details
                     </h2>
                     <p className="mt-4 text-sm text-gray-600">
                        The 6-Pack includes two black, two white, and two
                        heather gray Basic Tees...
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ProductDetail;
