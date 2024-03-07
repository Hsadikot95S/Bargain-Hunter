import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:8084/item' });
//const baseURL = 'http://localhost:8084/api/products';

const productService = {
  getAllProducts: async () => {
    try {
      const response = await API.get(`/getAllItems`);
      return response.data;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  },

  createProduct: async (productData) => {
    try {
      const response = await API.post(`/saveItem`, productData);
      return response.data;
    } catch (error) {
      console.error('Error creating product:', error);
      throw error;
    }
  },

  updateProduct: async (productId, productData) => {
    try {
      const response = await API.put(`updateItem/${productId}`, productData);
      return response.data;
    } catch (error) {
      console.error('Error updating product:', error);
      throw error;
    }
  },

  deleteProduct: async (productId) => {
    try {
      const response = await API.delete(`/deleteItem/${productId}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting product:', error);
      throw error;
    }
  }
};

export default productService;
