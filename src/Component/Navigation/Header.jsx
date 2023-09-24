import React from 'react';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white py-4 hidden  md:block">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-2xl font-semibold">
          <img
            src="/path/to/your/logo.png"
            alt="Logo"
            className="h-8 w-8 mr-2"
          />
        </div>
        <nav>
          <a href="#" className="text-white hover:text-gray-300 ml-4">
            Home
          </a>
          <a href="#" className="text-white hover:text-gray-300 ml-4">
            About
          </a>
          <a href="#" className="text-white hover:text-gray-300 ml-4">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
