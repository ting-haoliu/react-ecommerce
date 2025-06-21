import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProductCard = ({ product }) => {
   return (
      <div className="flex flex-col">
         <Link key={product.id} className="flex-1 group cursor-pointer">
            <img
               alt={product.title}
               src={product.image}
               className="aspect-square rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
            />
            <h3 className="mt-4 text-sm text-gray-700">{product.title}</h3>
         </Link>

         <p className="mt-1 text-lg font-medium text-gray-900">
            {product.price}
         </p>
         <button className="mt-2 rounded-3xl bg-yellow-300 px-4 py-2 text-black cursor-pointer hover:opacity-75">
            Add to Cart
         </button>
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
