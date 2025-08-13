const API_BASE_URL = 'https://fakestoreapi.com';

export const fetchProducts = async () => {
   try {
      const response = await fetch(`${API_BASE_URL}/products`, {
         mode: 'cors',
      });

      if (response.status >= 400) {
         throw new Error(`HTTP error: Status ${response.status}`);
      }

      const products = await response.json();
      return products;
   } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
   }
};

export const fetchProductById = async (id) => {
   try {
      const response = await fetch(`${API_BASE_URL}/products/${id}`, {
         mode: 'cors',
      });

      if (response.status >= 400) {
         throw new Error(`HTTP error: Status ${response.status}`);
      }

      const product = await response.json();
      return product;
   } catch (error) {
      console.error('Error fetching product by ID:', error);
      throw error;
   }
};
