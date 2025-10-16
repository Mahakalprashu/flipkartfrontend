import React from "react";
import ProductCard from "./ProductCard";

const ProductsGrid = ({ products, addToCart }) => {
  return (
    <div className="container my-4">
      <div className="row g-3">
        {products.slice(0, 4).map((product) => ( // only first 4 products
          <div className="col-md-3 col-sm-6 col-12" key={product.id}>
            <ProductCard product={product} addToCart={addToCart} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsGrid;
