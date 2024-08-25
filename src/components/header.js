import React, { useState } from "react";

import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlinestatus";
import { LOGO } from "../utils/mockdata";

export const Header = () => {
  const [btnName, setBtnName] = useState("login");
  const onlinestatus = useOnlinestatus();
  return (
    <div className="flex justify-between shadow-lg bg-pink-100 md:bg-blue-200 flex-wrap sticky top-0 z-10">
      <div className="m-3">
        <img alt="imageID" className="w-24" src={LOGO} />
      </div>
      <div className="flex items-center">
        <ul className="flex flex-wrap gap-4 p-8 px-4 text capitalize">
          <li className="px-5  hover:text-orange-600">
            OnlineStatus:{onlinestatus ? "✅" : "🔴"}
          </li>
          <li className="px-5  hover:text-orange-600">
            <Link to="/" className="handle-link">
              home
            </Link>
          </li>
          <li className="px-5  hover:text-orange-600">
            <Link to="/about" className="handle-link">
              About
            </Link>
          </li>
          <li className="px-5  hover:text-orange-600">
            <Link to="/contact" className="handle-link">
              contact
            </Link>
          </li>
          <li className="px-5  hover:text-orange-600">
            <Link to="/grocery" className="handle-link">
              Grocery
            </Link>
          </li>
          <li className="px-5  hover:text-orange-600">card</li>
          <button
            className="px-5 hover:text-orange-600"
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
