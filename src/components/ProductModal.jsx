import React from "react";
import { motion } from "framer-motion";

const ProductModal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-white p-6 rounded shadow-lg max-w-md w-full relative"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={product.image}
          alt={product.name}
          className="h-64 w-full object-contain mb-4"
        />
        <h2 className="font-bold text-xl">{product.name}</h2>
        <p className="text-gray-700 mt-2">{product.description}</p>
        <p className="text-blue-600 font-semibold mt-2">₹{product.price}</p>
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          ✕
        </button>
      </motion.div>
    </motion.div>
  );
};

export default ProductModal;
