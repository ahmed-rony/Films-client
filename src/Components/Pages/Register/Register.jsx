import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import "./Register.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../Component/Navbar/Navbar";
import { newRequest } from "../../Utilities/newRequest";

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    fullName: "",
    email: "",
    password: "",
    isTalent: false,
  });
  const [err, setErr] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleTalent = (e) => {
    setUser((prev) => ({ ...prev, isTalent: e.target.checked }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await newRequest.post("/auths/register", user);
      navigate("/login");
    } catch (error) {
      setErr(error.response.data);
    }
  };

  return (
    <>
      <Navbar />
      <section className="register">
        <form onSubmit={handleSubmit} className="register-form">
          <div className="register-box">
            <h2>Create an Account</h2>
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Full Name"
              name="fullName"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
            <div className="isTalent">
              <input
                type="checkbox"
                name="isTalent"
                id=""
                onChange={handleTalent}
              />
              <label htmlFor="">A Job Seeker</label>
            </div>

            <button type="submit" className="brand-btn register-btn">
              Submit
            </button>
            <button className="brand-btn google-btn ">
              <FcGoogle className="me-2 google-icon" />
              Google
            </button>
            {err && <small style={{ color: "orange" }}>{err}</small>}
            <small>
              Have an account? <Link to="/login">login</Link>
            </small>
          </div>
        </form>
      </section>
    </>
  );
};

export default Register;
