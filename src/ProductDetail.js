import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error('Error fetching product details: ', error);
      });
  }, [id]);

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-screen-lg mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-4">
          <img src={product.image} alt={product.title} className="mx-auto h-40" />
          <h3 className="text-xl font-semibold mt-2">{product.title}</h3>
          <p className="text-gray-600">${product.price}</p>
          <p className="text-sm mt-2">{product.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
