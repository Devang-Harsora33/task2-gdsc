import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes instead of Route
import axios from 'axios';
import Product from './Product';
import ProductDetail from './ProductDetail';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="container mx-auto p-4">
            <h1 className="text-3xl font-semibold mb-8">Shopping Page</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {products.map((product) => (
                <Product key={product.id} product={product} />
              ))}
            </div>
          </div>
        } />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
