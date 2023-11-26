// components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-green-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-bold">
          Manducare
        </Link>
        <div className="space-x-4">
          <Link to="/download" className="text-white">
            Download
          </Link>
          <Link to="/signin" className="text-white">
            Sign In
          </Link>
          <Link to="/signup" className="text-white bg-pink-500 px-4 py-2 rounded">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
