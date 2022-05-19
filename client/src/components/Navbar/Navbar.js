import React from 'react'
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import './Navbar.css'
const Navbar = () => {
  return (
    <div className="navbar dflex">
      <div className="navbar_logo">
        <Link to="/">React+Sanity</Link>
      </div>
      <div className="navbar_menu">
        <ul>
          <li>
            <Link to="/">
              <Button variant="text">Home</Button>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <Button variant="text">About</Button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar