const Footer = () => {
   const currentYear = new Date().getFullYear();

   return (
      <footer className="h-16 min-h-16 bg-gray-800 text-white flex items-center justify-center">
         <p>Ting-Hao Liu © {currentYear}. All rights reserved.</p>
      </footer>
   );
};

export default Footer;
