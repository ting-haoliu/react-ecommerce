import { useState, useEffect } from 'react';
import { getProducts } from '../api/products';
import ProductCard from './ProductCard';

const ProductList = () => {
   const [products, setProducts] = useState([]);

   useEffect(() => {
      getProducts().then(setProducts).catch(console.error);
   }, []);

   return (
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
         {products.map((product) => (
            <ProductCard key={product.id} product={product} />
         ))}
      </div>
   );
};

export default ProductList;
