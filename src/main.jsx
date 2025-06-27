import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppProviders from './contexts/AppProviders';

import routes from './routes';
import './index.css';

const router = createBrowserRouter(routes);

createRoot(document.getElementById('root')).render(
   <StrictMode>
      <AppProviders>
         <RouterProvider router={router} />
      </AppProviders>
   </StrictMode>
);
