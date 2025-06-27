import { ShopProvider } from './ShopContext';

const AppProviders = ({ children }) => {
   return <ShopProvider>{children}</ShopProvider>;
};

export default AppProviders;
