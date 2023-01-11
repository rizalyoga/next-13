import Link from "next/link";
import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar_container">
      <div className="navbar_inner_wrapper">
        <ul className="nav_link">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
