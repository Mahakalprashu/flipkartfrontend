import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FiShoppingCart, FiUser } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/image.png";
// Your Flipkart logo

const Header = ({ cartCount = 0 }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  // Load logged-in user from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-dark bg-dark px-3">
      {/* Logo */}
      <Link className="navbar-brand d-flex align-items-center" to="/">
        <img src={logo} alt="Flipkart Logo" style={{ height: '40px', marginRight: '10px' }} />
        Flipkart Clone
      </Link>

      {/* Search Bar */}
      <div className="flex-grow-1 mx-3">
        <div className="input-group">
          <input 
            type="text" 
            className="form-control" 
            placeholder="Search for products, brands and more" 
          />
          <button className="btn btn-warning" type="button">
            <IoIosSearch size={20} />
          </button>
        </div>
      </div>

      {/* User Options */}
      <div className="d-flex align-items-center">
        {user ? (
          <>
            <span className="text-white me-3">Hi, {user.username || user.email}</span>
            <button onClick={handleLogout} className="btn btn-outline-light me-3">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="btn btn-dark text-white me-3 d-flex align-items-center">
              <FiUser size={20} className="me-1" /> Login
            </Link>
            <Link to="/signup" className="btn btn-dark text-white me-3 d-flex align-items-center">
              <FiUser size={20} className="me-1" /> Signup
            </Link>
          </>
        )}
        <Link to="/cart" className="btn btn-dark text-white d-flex align-items-center position-relative">
          <FiShoppingCart size={20} className="me-1" /> Cart
          {cartCount > 0 && (
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {cartCount}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Header;
