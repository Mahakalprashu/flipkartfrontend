import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Cart from "./components/Cart";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import CategoryCarousel from "./components/CategoryCarousel";
import './index.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  const [cart, setCart] = useState([]); // cart state lifted here

  // ✅ Remove product from cart by index
  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  return (
    <Router>
      <Header cartCount={cart.length} />
      <CategoryCarousel />
      <Routes>
        <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
        {/* Pass removeFromCart to Cart */}
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} removeFromCart={removeFromCart} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
