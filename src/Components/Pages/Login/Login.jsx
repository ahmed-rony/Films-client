import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import "./Login.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../Component/Navbar/Navbar";
import { newRequest } from "../../Utilities/newRequest";
import AuthContext from "../../Utilities/Reducers/AuthReducer";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await newRequest.post("/auths/login", { username, password });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      navigate("/");
    } catch (error) {
      dispatch({ type: "LOGIN_FAIL", payload: error.response.data });
    }
  };

  return (
    <>
      <Navbar />
      <section className="login">
        <form onSubmit={handleSubmit} className="login-form">
          <div elevation={3} className="login-box">
            <h2>Sign In</h2>
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              disabled={loading}
              type="submit"
              className="brand-btn login-btn"
            >
              Login
            </button>
            <button className="brand-btn google-btn ">
              <FcGoogle className="me-2 google-icon" />
              Google
            </button>
            {error && <small style={{ color: "orange" }}>{error}</small>}
            <small>
              Don't have an account? <Link to="/register">register</Link>
            </small>
          </div>
        </form>
      </section>
    </>
  );
};

export default Login;
