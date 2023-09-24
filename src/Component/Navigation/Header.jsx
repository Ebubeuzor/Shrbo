import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white py-4 hidden md:block">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-2xl font-semibold">
          <img
            src="/path/to/your/logo.png"
            alt="Logo"
            className="h-8 w-8 mr-2"
          />
        </div>
        <nav>
          <Link to="/" className="text-white hover:text-gray-300 ml-4">
            Home
          </Link>
          <Link to="/wishlist" className="text-white hover:text-gray-300 ml-4">
            Wishlist
          </Link>
          <Link to="/trip" className="text-white hover:text-gray-300 ml-4">
            Trips
          </Link>   
          <Link to="/chat" className="text-white hover:text-gray-300 ml-4">
            Inbox
          </Link>
          <Link to="/profile" className="text-white hover:text-gray-300 ml-4">
            Profile
          </Link>
        </nav>
      </div>
    </header>
  );
}
