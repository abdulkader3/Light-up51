import React from "react";
import { NavLink } from "react-router-dom";

const LoginPage = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/messages" className={({ isActive }) => isActive ? "active" : ""}></NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default LoginPage;
