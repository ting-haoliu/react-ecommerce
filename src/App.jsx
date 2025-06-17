import { Outlet } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
   return (
      <>
         <Header />
         <main className="flex-1">
            <Outlet />
         </main>
         <Footer />
      </>
   );
};

export default App;
