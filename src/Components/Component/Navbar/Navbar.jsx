import React, { useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [currentUser, setCurrentUser] = useState(false);
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
            <Link to="/magazine">Magazine</Link>
          </div>
          <div className="login">
            {currentUser ? (
              <>
                <img
                  src="https://i.pinimg.com/236x/6b/2f/32/6b2f323d39f013faa9bf8ce141e9fba7.jpg"
                  alt=""
                />
                <button>Logout</button>
              </>
            ) : (
              <>
              <Link to='/register'><button>Join Us</button></Link>
              <Link to='/login'><button>Login</button></Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
