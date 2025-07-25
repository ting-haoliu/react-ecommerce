import App from './App';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import CartPage from './pages/CartPage';

const routes = [
   {
      path: '/',
      element: <App />,
      children: [
         { index: true, element: <HomePage /> },
         { path: 'shop', element: <ShopPage /> },
         { path: 'shop/:id', element: <ProductDetailsPage /> },
         { path: 'cart', element: <CartPage /> },
      ],
   },
];

export default routes;
