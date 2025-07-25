import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { CartContext } from '../contexts/CartContext';

const ProductCard = ({ product }) => {
   const { addToCart } = useContext(CartContext);

   return (
      <div className="flex flex-col">
         <Link
            to={`/shop/${product.id}`}
            className="flex-1 group cursor-pointer"
         >
            <img
               alt={product.title}
               src={product.image}
               className="aspect-square rounded-lg bg-gray-200 group-hover:opacity-75 xl:aspect-7/8"
            />
            <h3 className="mt-4 text-xl text-gray-700">{product.title}</h3>
         </Link>

         <div className="flex items-center justify-between mt-4">
            <p className="mt-1 text-lg font-medium text-gray-900">
               <span className="mr-1">$</span>
               {product.price}
            </p>
            <button
               type="button"
               className="mt-2 rounded-xl bg-yellow-300 px-4 py-2 text-black cursor-pointer hover:opacity-75"
               onClick={() => addToCart(product)}
            >
               Add to Cart
            </button>
         </div>
      </div>
   );
};

ProductCard.propTypes = {
   product: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
   }).isRequired,
};

export default ProductCard;
