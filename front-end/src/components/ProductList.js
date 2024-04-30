import React, { useState, useEffect } from 'react';
import productService from '../services/productService';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const productsData = await productService.getAllProducts();
        setProducts(productsData);
      } catch (error) {
        console.error('Error:', error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name} - ${product.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
