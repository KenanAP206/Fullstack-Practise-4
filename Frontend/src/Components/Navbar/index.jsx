import React from "react";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import "./Navbar.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <nav>
        {/* <div className="nav-up">
          <div className="nav-up-l">
            <FaFacebook />
            <AiFillTwitterCircle />
            <RiInstagramFill />
            <FaLinkedin />
          </div>
          <div className="nav-up-r">
            <span>
              {" "}
              <BsFillTelephoneFill /> (+1) 234 5678 9101
            </span>
            <span>
              {" "}
              <MdEmail /> shop@yourdomain.com
            </span>
          </div>
        </div> */}
        <div className="nav-low">
          <NavLink to="/">
            <div className="logo">
              Selling<span>.</span>
            </div>
          </NavLink>
          <div className="navlinks">
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "#F16821" } : { color: "black" }
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "#F16821" } : { color: "black" }
              }
              to="/add"
            >
              Add
            </NavLink>
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "#F16821" } : { color: "black" }
              }
              to="/wishlist"
            >
              Wishlist
            </NavLink>
            <a href="">Products</a>
            <a href="">About Us</a>
            <a href="">Team</a>
            <a href="">Services</a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
