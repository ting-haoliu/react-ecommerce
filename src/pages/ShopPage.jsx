import ProductList from '../components/ProductList';

const ShopPage = () => {
   return (
      <div className="bg-white">
         <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only">Products</h2>
            <ProductList />
         </div>
      </div>
   );
};

export default ShopPage;
