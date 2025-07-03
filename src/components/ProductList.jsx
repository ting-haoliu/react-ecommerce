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
      <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
         {products.map((product) => (
            <ProductCard key={product.id} product={product} />
         ))}
      </div>
   );
};

export default ProductList;
