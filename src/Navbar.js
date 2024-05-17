import React from 'react';
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
        <Link to="/">Home</Link>
        <Link to="/userlogin">User Login</Link>
        <Link to="/adminlogin">Admin Login</Link>
        <Link to="/signup">New User? Register Now.</Link>
    </div>
  )
}
