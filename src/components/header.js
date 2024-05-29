import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
export const Header = () => {
  const [btnName, setBtnName] = useState("login");
  return (
    <div className="Header-container">
      <div className="header-img">
        <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/food-company-logo-design-template-6deb84ff3a409053e3f865b719250d7b_screen.jpg?ts=1589979123" />
      </div>
      <div className="nav-list">
        <ul className="ulList">
          <li>
            <Link to="/" className="handle-link">
              home
            </Link>
          </li>
          <li>
            <Link to="/about" className="handle-link">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="handle-link">
              contact
            </Link>
          </li>
          <li>card</li>
          <button
            onClick={() => {
              if (btnName === "login") {
                setBtnName("logout");
              } else {
                setBtnName("login");
              }
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
