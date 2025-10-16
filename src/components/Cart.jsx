import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ cart, removeFromCart }) => {
  // Calculate total price
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  if (!cart || cart.length === 0) {
    return (
      <div className="min-vh-100 d-flex flex-column justify-content-center align-items-center bg-light">
        <h2 className="mb-4 text-secondary fw-semibold">Your cart is empty 🛒</h2>
        <Link to="/" className="btn btn-primary">
          Go to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold">🛍️ Your Shopping Cart</h2>
        <Link to="/" className="btn btn-outline-primary">
          Continue Shopping
        </Link>
      </div>

      <div className="row g-4">
        {cart.map((product, index) => (
          <div className="col-12 col-md-6 col-lg-4" key={index}>
            <div className="card h-100 shadow-sm border-0">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="card-img-top p-3"
                style={{ height: "220px", objectFit: "contain" }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/220?text=No+Image";
                }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{product.name}</h5>
                <p className="fw-semibold text-success mb-2">₹{product.price}</p>
                <button
                  onClick={() => removeFromCart(index)}
                  className="btn btn-danger w-100"
                >
                  Remove from Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Total and Checkout */}
      <div className="mt-5 border-top pt-4 text-end">
        <h4 className="fw-bold">
          Total Price: <span className="text-success">₹{totalPrice}</span>
        </h4>
        <button
          className="btn btn-success px-4 py-2 mt-2"
          onClick={() => alert("Proceeding to checkout...")}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
