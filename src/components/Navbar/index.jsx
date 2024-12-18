import React from "react";
import { Link } from "react-router";

function Navbar({ cartCount }) {
  return (
    <nav className="bg-[#5f5f7e]">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cart">Karzinka ({cartCount})</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
