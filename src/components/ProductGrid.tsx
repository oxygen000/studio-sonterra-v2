'use client';

import React from "react";
import { ProductCard } from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Summer Dress",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446"
  },
  {
    id: 2,
    name: "Elegant Blouse",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105"
  },
  {
    id: 3,
    name: "Classic Jeans",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246"
  },
  {
    id: 4,
    name: "Casual Top",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1551048632-24e444b48a3e"
  }
];

const ProductGrid = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
