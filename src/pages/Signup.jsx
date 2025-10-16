import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import './Login.css';

const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSignup = async () => {
    setError("");
    setSuccess("");
    try {
      const res = await fetch("http://localhost:8081/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password })
      });
      const data = await res.json();
      if (res.error) {
        setError(data.error);
      } else {
        setSuccess("Signup successful! You can login now.");
        setTimeout(() => navigate("/login"), 1500);
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong");
    }
  };

  return (
    <section className="h-100 gradient-form">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black auth-card">
              <div className="row g-0 h-100">
                
                {/* Form */}
                <div className="col-lg-6">
                  <div className="auth-form-body">
                    <div className="text-center">
                      <img
                        src="https://pnghdpro.com/wp-content/themes/pnghdpro/download/social-media-and-brands/flipkart-logo.png"
                        alt="logo"
                        className="auth-logo"
                      />
                      <h4 className="mt-1 mb-4">Create Your Account</h4>
                    </div>

                    <form>
                      <div className="form-outline mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Username"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                        />
                      </div>

                      <div className="form-outline mb-3">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>

                      <div className="form-outline mb-3">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>

                      {error && <p className="text-danger">{error}</p>}
                      {success && <p className="text-success">{success}</p>}

                      <button
                        type="button"
                        className="btn btn-primary auth-button"
                        onClick={handleSignup}
                      >
                        Sign up
                      </button>

                      <p className="text-center mt-3">
                        Already have an account? <Link to="/login">Login</Link>
                      </p>
                    </form>
                  </div>
                </div>

                {/* Gradient Panel */}
                <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                  <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                    <h4 className="mb-4">Let's Create the Account</h4>
                    <p className="small mb-0">
                     Please create your account
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
