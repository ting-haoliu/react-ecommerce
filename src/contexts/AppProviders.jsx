import { CartProvider } from './CartContext';
import PropTypes from 'prop-types';

const AppProviders = ({ children }) => {
   return <CartProvider>{children}</CartProvider>;
};

AppProviders.propTypes = {
   children: PropTypes.node.isRequired,
};

export default AppProviders;
