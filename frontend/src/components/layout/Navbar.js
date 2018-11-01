import React from 'react';

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="navbox">
          <ul className="navbar-bar">
            <li>
              <a href="">WriteAboutIt</a>
            </li>
          </ul>

          <ul className="navbar-bar">
            <li><a href="">Login</a></li>
            <li><a href="">Sign Up</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
