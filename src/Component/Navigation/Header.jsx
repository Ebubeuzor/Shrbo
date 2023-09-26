import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };


  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (isDropdownOpen) {
        const dropdown = document.getElementById('profile-dropdown');
        if (dropdown && !dropdown.contains(event.target)) {
          closeDropdown();
        }
      }
    };

    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [isDropdownOpen]);

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
        <nav className='flex'>
          <Link to="/" className="text-white hover:text-gray-300 ml-4">
            Home
          </Link>
          <Link to="/wishlist" className="text-white hover:text-gray-300 ml-4">
            Wishlist
          </Link>
          <Link to="/trip" className="text-white hover:text-gray-300 ml-4">
            Trips
          </Link>   
          <Link to="/ManageListings" className="text-white hover:text-gray-300 ml-4">
            Manage Listings
          </Link>  
          <div
            id="profile-dropdown"
            className={`relative ${isDropdownOpen ? 'group' : ''}`}
            onClick={toggleDropdown}
            tabIndex={0}
          >
            <Link to="" className="text-white hover:text-gray-300 ml-4">
              Profile
            </Link>
            {isDropdownOpen && (
              <div className="absolute bg-white right-0 mt-1 p-2 w-32 border rounded-lg shadow-lg">
                {/* Dropdown content goes here */}
                <Link to="/Profile" className="block text-gray-800 hover:text-blue-500">
                  Edit Profile
                </Link>
                <Link to="/profile" className="block text-gray-800 hover:text-blue-500">
                  Settings
                </Link>
                <Link to="/logout" className="block text-gray-800 hover:text-red-500">
                  Logout
                </Link>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
