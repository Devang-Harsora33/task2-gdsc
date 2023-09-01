import React from 'react';
import { Link } from 'react-router-dom';

function Product({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="hover:underline">
      <div className="bg-white rounded-lg shadow-lg p-4">
        <img src={product.image} alt={product.title} className="mx-auto h-40" />
        <h3 className="text-lg font-semibold mt-2">{product.title}</h3>
        <p className="text-gray-600">${product.price}</p>
        <p className="text-sm mt-2">{product.description}</p>
      </div>
    </Link>
  );
}

export default Product;
