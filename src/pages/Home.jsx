import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { motion, AnimatePresence } from "framer-motion";

const Home = ({ cart = [], setCart }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [animateCart, setAnimateCart] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch products from backend with JWT
  useEffect(() => {
    const token = sessionStorage.getItem("token") || "";

    fetch("http://localhost:8080/api/products", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to fetch products: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, []);

  // Filter products based on search query
  useEffect(() => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchQuery, products]);

  // Add to cart
  const addToCart = (product) => {
    setCart([...cart, product]);
    setAnimateCart(true);
    setTimeout(() => setAnimateCart(false), 300);
  };

  // Remove from cart
  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
        <h2 className="text-muted">Loading Products...</h2>
      </div>
    );
  }

  return (
    <div className="container my-4">
      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="form-control"
        />
      </div>

      {/* Cart Button */}
      {cart.length > 0 && (
        <div className="mb-3 position-relative">
          <motion.button
            onClick={() => setIsCartOpen((prev) => !prev)}
            className="btn btn-primary position-relative"
            animate={animateCart ? { scale: [1, 1.2, 1] } : { scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            🛒
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-light text-primary">
              {cart.length}
            </span>
          </motion.button>

          {/* Mini Cart Panel */}
          <AnimatePresence>
            {isCartOpen && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
                className="card position-absolute mt-2 p-2 shadow"
                style={{ width: "18rem", zIndex: 100 }}
              >
                {cart.map((product, index) => (
                  <div
                    key={index}
                    className="d-flex align-items-center justify-content-between mb-2 border rounded p-1 bg-light"
                  >
                    <img
                      src={product.imageUrl} // ✅ uses correct field
                      alt={product.name}
                      style={{ width: "50px", height: "50px", objectFit: "contain" }}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src =
                          "https://via.placeholder.com/50?text=No+Image";
                      }}
                    />
                    <div className="flex-grow-1 mx-2">
                      <h6 className="mb-0" style={{ fontSize: "0.8rem" }}>
                        {product.name}
                      </h6>
                      <small>₹{product.price}</small>
                    </div>
                    <button
                      onClick={() => removeFromCart(index)}
                      className="btn btn-sm btn-danger"
                    >
                      ✖
                    </button>
                  </div>
                ))}
                <div className="d-flex justify-content-between fw-bold mt-2">
                  <span>Total:</span>
                  <span>₹{totalPrice}</span>
                </div>
                <button
                  onClick={() => alert("Proceeding to checkout")}
                  className="btn btn-success btn-sm mt-2 w-100"
                >
                  Checkout
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      {/* Products Grid */}
      <div className="row g-3">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div className="col-md-3 col-sm-6 col-12" key={product.id}>
              <ProductCard product={product} addToCart={addToCart} />
            </div>
          ))
        ) : (
          <p className="text-center text-muted">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
