import React from "react";
import { motion } from "framer-motion";

const categories = [
  "Mobiles", "Laptops", "Headphones", "Cameras",
  "Watches", "Gaming", "TVs", "Appliances"
];

// Solid background colors
const bgColors = [
  "#bfdbfe", "#e9d5ff", "#fbcfe8", "#bbf7d0",
  "#fef9c3", "#fecaca", "#c7d2fe", "#99f6e4"
];

// Text colors
const textColors = [
  "#1e3a8a", "#6b21a8", "#be185d", "#047857",
  "#78350f", "#b91c1c", "#312e81", "#134e4a"
];

const CategoryCarousel = () => {
  return (
    <div style={{ overflowX: "auto", padding: "1rem 0", whiteSpace: "nowrap" }}>
      <motion.div 
        style={{ display: "flex", gap: "1.5rem", padding: "0 1rem" }}
        whileTap={{ cursor: "grabbing" }}
      >
        {categories.map((cat, index) => (
          <motion.div
            key={index}
            style={{
              backgroundColor: bgColors[index % bgColors.length],
              color: textColors[index % textColors.length],
              padding: "0.5rem 1.25rem",
              borderRadius: "9999px",
              fontWeight: "bold",
              fontFamily: "'Roboto', sans-serif",
              letterSpacing: "3px",
              fontSize: "0.875rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center"
            }}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {cat.toUpperCase()}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default CategoryCarousel;
