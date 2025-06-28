import { CartProvider } from './CartContext';

const AppProviders = ({ children }) => {
   return <CartProvider>{children}</CartProvider>;
};

export default AppProviders;
