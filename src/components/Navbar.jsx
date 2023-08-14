import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";



const Navbar = () => {
  
  const item = useSelector((state)=>state.cart)
  
  return (
    <div className="container">
      <div className="logo">
        <h3>Fashoin World</h3>
        <div className="navigation">
          <ul>
            <li>
              <Link to="/home">Product</Link>
            </li>
            <li>
              <Link to="/cart">My Beg {item.length}</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="icon">
        <span>
          <i className="bx bx-menu"></i>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
