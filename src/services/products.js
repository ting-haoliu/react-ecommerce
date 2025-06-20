const API_BASE_URL = 'https://fakestoreapi.com';

export const getProducts = async () => {
   try {
      const response = await fetch(`${API_BASE_URL}/products`, {
         mode: 'cors',
      });
      if (!response.ok) {
         throw new Error(`HTTP error: Status ${response.status}`);
      }

      const products = await response.json();
      return products;
   } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
   }
};
