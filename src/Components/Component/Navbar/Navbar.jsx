import React, { useContext, useState } from "react";
import "./Navbar.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { newRequest } from "../../Utilities/newRequest";
import AuthContext from "../../Utilities/Reducers/AuthReducer";

const Navbar = () => {
  const { currentUser, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogout = async () => {
    try {
      await newRequest.post("/auths/logout");
      dispatch({ type: "LOGOUT"});
      navigate(from, { replace: true });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="logo">
            <Link to="/">
              <img src="/Img/logo.png" alt="" />
            </Link>
          </div>
        </div>
        <div className="right">
          <div className="item">
            <Link to="/talents">Talents</Link>
            <Link to="/jobs">Jobs</Link>
            <Link to="/companies">Companies</Link>
            <Link to="/magazines">Magazine</Link>
          </div>
          <div className="join-btns">
            {currentUser ? (
              <>
              <Link to={`/profile/${currentUser?._id}`}>
                <img src={currentUser?.profilePic || "/Img/avater.jpg"} alt="" />
              </Link>
                <button onClick={handleLogout}>Logout</button>
              </>
            ) : (
              <>
                <Link to="/register">
                  <button>Join Us</button>
                </Link>
                <Link to="/login">
                  <button>Login</button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
