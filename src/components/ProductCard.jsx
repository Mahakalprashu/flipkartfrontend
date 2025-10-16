import React, { useState } from "react";
import { motion } from "framer-motion";

const ProductCard = ({ product, addToCart }) => {
  const [imgStyle, setImgStyle] = useState({});

  const handleImageLoad = (e) => {
    const maxHeight = 160;
    const maxWidth = 160;
    const { naturalHeight, naturalWidth } = e.target;
    let height = naturalHeight;
    let width = naturalWidth;

    if (naturalHeight > maxHeight || naturalWidth > maxWidth) {
      const scale = Math.min(maxHeight / naturalHeight, maxWidth / naturalWidth);
      height = naturalHeight * scale;
      width = naturalWidth * scale;
    }

    setImgStyle({ width: `${width}px`, height: `${height}px` });
  };

  return (
    <motion.div
      className="card h-100 shadow-sm"
      whileHover={{ scale: 1.03 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image */}
      <div
        className="d-flex justify-content-center align-items-center bg-light p-2"
        style={{ height: "160px" }}
      >
        <img
          src={product.imageUrl}
          alt={product.name}
          style={imgStyle}
          onLoad={handleImageLoad}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://via.placeholder.com/150?text=No+Image";
          }}
          className="img-fluid"
        />
      </div>

      {/* Card Body */}
      <div className="card-body d-flex flex-column text-center">
        <h6 className="card-title text-truncate">{product.name}</h6>
        <p className="card-text text-muted small">{product.description}</p>
        <p className="fw-bold bg-light py-1 rounded shadow-sm">₹{product.price}</p>

        {/* Add to Cart */}
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0px 4px 15px rgba(0,0,0,0.2)" }}
          whileTap={{ scale: 0.95 }}
          className="btn btn-primary rounded-pill mt-auto"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
