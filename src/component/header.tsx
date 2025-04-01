import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header-container">
      <div className="header-logo">
        <Link to="/home">Logo</Link>
      </div>
      <nav className="header-nav">
        <ul className="header-nav-list">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="#">Login</Link>
          </li>
          <li>
            <Link to="#">Register</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
